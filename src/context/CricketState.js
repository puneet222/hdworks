import React, { useReducer } from "react";
import CricketContext from "./cricketContext";
import CricketReducer from "./cricketReducer";
import {
  CHANGE_STATUS,
  CHANGE_TYPE,
  GET_SERIES,
  GET_SERIES_LISTING,
  SET_CURRENT_SERIES,
  GET_MATCH_LIST
} from "./types";
import * as CONST from "../Utils/constants";
import { default as ApolloClient } from "apollo-boost";
import {
  getScheduleQuery,
  getSeriesListingQuery,
  getMatchListingQuery
} from "./queries";
import { stat } from "fs";

const CricketState = props => {
  const initialState = {
    status: CONST.UPCOMING,
    type: CONST.ALL,
    loading: true,
    series: [],
    seriesListing: [],
    matches: [],
    currentSeries: null
  };

  const client = new ApolloClient({
    uri: "https://api.devcdc.com/cricket"
  });

  const [state, dispatch] = useReducer(CricketReducer, initialState);

  const getData = (type, status) => {
    const query = getScheduleQuery(type, status);
    client
      .query({
        query: query
      })
      .then(res =>
        dispatch({
          type: GET_SERIES,
          payload: res.data.schedule
        })
      );
  };

  const mergeAllSeriesData = data => {
    let series = [];
    data.forEach(item => series.push(...item.series));
    series = series.filter(item => item.seriesID !== "");
    return series;
  };

  const segregateSeriesByStatus = (data, status) => {
    let tmonth = new Date().getMonth();
    let tyear = new Date().getFullYear();
    switch (status) {
      case CONST.UPCOMING: {
        data = data.filter(item => {
          let date = new Date(Number(item.startDate));
          let m = date.getMonth();
          let y = date.getFullYear();
          return y > tyear
            ? true
            : y === tyear
            ? m > tmonth
              ? true
              : false
            : false;
        });
        return data;
      }
      case CONST.LIVE: {
        data = data.filter(item => {
          let date = new Date(Number(item.startDate));
          let m = date.getMonth();
          let y = date.getFullYear();
          return m === tmonth && y === tyear ? true : false;
        });
        return data;
      }
      case CONST.DOMESTIC: {
        data = data.filter(item => {
          let date = new Date(Number(item.startDate));
          let m = date.getMonth();
          let y = date.getFullYear();
          return y < tyear
            ? true
            : y === tyear
            ? m < tmonth
              ? true
              : false
            : false;
        });
        return data;
      }
      default:
        return data;
    }
  };

  const getSeriesListing = (type, status) => {
    const query = getSeriesListingQuery(type);
    client
      .query({
        query: query
      })
      .then(res => {
        let seriesList = mergeAllSeriesData(res.data.listseries);
        seriesList = segregateSeriesByStatus(seriesList, status);
        dispatch({
          type: GET_SERIES_LISTING,
          payload: seriesList
        });
      });
  };

  const getMatchListing = seriesID => {
    const query = getMatchListingQuery(seriesID);
    client
      .query({
        query: query
      })
      .then(res => {
        dispatch({
          type: GET_MATCH_LIST,
          payload: res.data.matcheslist
        });
      });
  };

  const changeStatus = status => {
    dispatch({
      type: CHANGE_STATUS,
      payload: status
    });
  };

  const changeType = type => {
    dispatch({
      type: CHANGE_TYPE,
      payload: type
    });
  };

  const setCurrentSeries = seriesID => {
    dispatch({
      type: SET_CURRENT_SERIES,
      payload: seriesID
    });
  };

  return (
    <CricketContext.Provider
      value={{
        status: state.status,
        type: state.type,
        series: state.series,
        seriesListing: state.seriesListing,
        loading: state.loading,
        currentSeries: state.currentSeries,
        matches: state.matches,
        getData,
        changeStatus,
        changeType,
        getSeriesListing,
        getMatchListing,
        setCurrentSeries
      }}
    >
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketState;
