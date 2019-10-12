import React, { useContext } from "react";
import CricketContext from "../context/cricketContext";
import * as CONST from "../Utils/constants";

const MatchType = () => {
  const cricketContext = useContext(CricketContext);
  const { changeType } = cricketContext;

  return (
    <div className="ph3 mb5">
      <div className="fl w-third pa2">
        <a
          className="f6 w-100 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple"
          href="#0"
          onClick={() => changeType(CONST.ALL)}
        >
          All
        </a>
      </div>
      <div className="fl w-third pa2">
        <a
          className="f6 w-100 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple"
          href="#0"
          onClick={() => changeType(CONST.INTERNATIONAL)}
        >
          International
        </a>
      </div>
      <div className="fl w-third pa2">
        <a
          className="f6 w-100 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-hot-pink"
          href="#0"
          onClick={() => changeType(CONST.DOMESTIC)}
        >
          Domestic
        </a>
      </div>
    </div>
  );
};

export default MatchType;
