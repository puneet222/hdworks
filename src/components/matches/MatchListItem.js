import React from "react";
// import Flag from "react-flags";
import Flag from "react-world-flags";

const MatchListItem = ({ match }) => {
  console.log(match);
  return (
    <article className="center w-90 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1 className="f4 bg-light-blue br3 br--top black-60 mv0 pv2 ph3">
        {match.matchName}
      </h1>
      <div className="pa3 bt b--black-10">
        <div className="tc">
          <a
            className="f6 w-60 tc link dim br-pill ph3 pv2 mb2 dib black bg-light-gray"
            href="#0"
          >
            {match.venue}
          </a>
          <div className="tc inline-flex">
            <div className="fl w-40 pa2">
              <Flag
                className="br2 w3 dib"
                code={match.homeTeamShortName}
                height="32"
              />
              <h5 className="mv2">{match.homeTeamShortName}</h5>
            </div>
            <div className="fl w-20 pa2">V/S</div>
            <div className="fl w-40 pa2">
              <Flag
                className="br2 w3 dib"
                code={match.awayTeamShortName}
                height="32"
              />
              <h5 className="mv2">{match.awayTeamShortName}</h5>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MatchListItem;
