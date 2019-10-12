import React from "react";

const SeriesItem = ({ series }) => {
  return (
    <div className="center mw6-ns hidden ba mv2">
      <h1 className="f4 bg-near-black white mv0 pv2 ph3">
        {series.seriesName}
      </h1>
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
    </div>
  );
};

export default SeriesItem;
