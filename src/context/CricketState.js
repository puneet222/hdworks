import React, { useReducer } from "react";
import CricketContext from "./cricketContext";
import CricketReducer from "./cricketReducer";
import { GET_DATA } from "./types";
import { Query } from "react-apollo";
import { default as ApolloClient } from "apollo-boost";
import gql from "graphql-tag";

const CricketState = props => {
  const initialState = {
    status: "ALL",
    type: "COMP"
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
      .then(res => console.log(res));
  };

  return (
    <CricketContext.Provider
      value={{
        status: state.status,
        type: state.type,
        getData
      }}
    >
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketState;
