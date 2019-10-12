import React, { useReducer } from "react";
import CricketContext from "./cricketContext";
import CricketReducer from "./cricketReducer";
import { GET_DATA, CHANGE_STATUS, CHANGE_TYPE, GET_SERIES } from "./types";
import * as CONST from "../Utils/constants";
import { Query } from "react-apollo";
import { default as ApolloClient } from "apollo-boost";
import gql from "graphql-tag";

const CricketState = props => {
  const initialState = {
    status: CONST.UPCOMING,
    type: CONST.ALL,
    series: []
  };

  const client = new ApolloClient({
    uri: "https://api.devcdc.com/cricket"
  });

  const [state, dispatch] = useReducer(CricketReducer, initialState);

  const getData = () => {
    const query = gql`
      {
        schedule(type: "All", status: "upcoming", page: 0) {
          matchID
          seriesName
          matchStatus
          toss
          homeTeamName
          awayTeamName
          seriesID
          matchType
          venue
          startEndDate
          matchResult
        }
      }
    `;
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

  return (
    <CricketContext.Provider
      value={{
        status: state.status,
        type: state.type,
        series: state.series,
        getData,
        changeStatus,
        changeType
      }}
    >
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketState;
