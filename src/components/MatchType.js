import React from "react";

const MatchType = () => {
  return (
    <div className="ph3">
      <div className="fl w-third pa2">
        <a
          className="f6 w-100 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple"
          href="#0"
        >
          All
        </a>
      </div>
      <div className="fl w-third pa2">
        <a
          className="f6 w-100 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple"
          href="#0"
        >
          International
        </a>
      </div>
      <div className="fl w-third pa2">
        <a
          className="f6 w-100 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-hot-pink"
          href="#0"
        >
          Domestic
        </a>
      </div>
    </div>
  );
};

export default MatchType;
