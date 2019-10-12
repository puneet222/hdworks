import React from "react";
import MatchFlag from "./MatchFlag";

const MatchListItem = ({ match }) => {
  const getDate = date => {
    let d = new Date(Number(date));
    var options = { year: "numeric", month: "long", day: "numeric" };
    return d.toLocaleDateString("en-US", options);
  };
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
          <MatchFlag match={match} />
          <div>
            <h3 className="mv0 fw3 f5">{getDate(match.startDate)}</h3>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MatchListItem;
