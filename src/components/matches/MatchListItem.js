import React from "react";

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
        </div>
      </div>
    </article>
  );
};

export default MatchListItem;
