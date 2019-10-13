import React from "react";
import Flag from "react-world-flags";

const MatchFlag = ({ match }) => {
  const getDate = date => {
    let d = new Date(Number(date));
    var options = { year: "numeric", month: "long", day: "numeric" };
    return d.toLocaleDateString("en-US", options);
  };
  return (
    <div className="tc inline-flex w-90">
      <div className="fl w-20 pa2">
        <Flag
          className="br2 w3 dib"
          code={match.homeTeamShortName}
          fallback={
            <span>
              <Flag className="br2 w3 dib" code="LC" height="32" />
            </span>
          }
          height="32"
        />
        <h5 className="mv2">{match.homeTeamShortName}</h5>
      </div>
      <div className="fl w-60 pa2">
        V/S
        <div>
          <h3 className="mv0 fw2 f5 pt3">{getDate(match.startDate)}</h3>
        </div>
      </div>
      <div className="fl w-20 pa2">
        <Flag
          className="br2 w3 dib"
          code={match.awayTeamShortName}
          fallback={
            <span>
              <Flag className="br2 w3 dib" code="VN" height="32" />
            </span>
          }
          height="32"
        />
        <h5 className="mv2">{match.awayTeamShortName}</h5>
      </div>
    </div>
  );
};

export default MatchFlag;
