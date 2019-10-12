import React from "react";

const SeriesItem = ({ series }) => {
  return (
    <div className="center mw6-ns hidden ba mv2">
      <h1 className="f4 bg-near-black white mv0 pv2 ph3">
        {series.seriesName}
      </h1>
      <div>
        <div className=" tc fl w-50 pa2">{series.matchType}</div>
        <div className="tc fl w-50 pa2">{series.venue}</div>
      </div>
      <div className="pa3 bt">
        <div className="pa4">
          <div className="overflow-auto">
            <table className="f6 w-100 mw8 center" cellSpacing="0">
              <tbody className="lh-copy">
                <tr className="stripe-dark">
                  <td className="pa3">FLAG</td>
                  <td className="pa3">{series.homeTeamName}</td>
                </tr>
                <tr className="stripe-dark">
                  <td className="pa3">FLAG</td>
                  <td className="pa3">{series.awayTeamName}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="tc">
        <a
          className="tc f6 link dim br-pill ph3 pv2 mb2 dib white bg-navy"
          href="#0"
        >
          {Math.round(Math.random() * 60)} minutes to toss
        </a>
      </div>
    </div>
  );
};

export default SeriesItem;
