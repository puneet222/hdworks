import gql from "graphql-tag";

export const getScheduleQuery = (type, status) => gql`
  {
    schedule(type: "${type}", status: "${status}", page: 0) {
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

export const getSeriesListingQuery = type => gql`
  {
    listseries(type: "${type}") {
    month
    series {
        seriesID,
        seriesName,
        Odicount,
        T20count,
        Testcount,
        league
    }
    }
  }
`;
