import React from "react";
import Flag from "react-world-flags";

const MatchFlag = ({ match }) => {
  return (
    <div className="tc inline-flex">
      <div className="fl w-40 pa2">
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
      <div className="fl w-20 pa2">V/S</div>
      <div className="fl w-40 pa2">
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
