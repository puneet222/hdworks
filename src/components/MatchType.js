import React, { useContext } from "react";
import CricketContext from "../context/cricketContext";
import * as CONST from "../Utils/constants";

const MatchType = () => {
  const cricketContext = useContext(CricketContext);
  const { changeType } = cricketContext;

  return (
    <div className="ph3">
      <div className="fl w-third pa2">
        <a
          className="f6 w-100 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple"
          onClick={() => changeType(CONST.ALL)}
        >
          All
        </a>
      </div>
      <div className="fl w-third pa2">
        <a
          className="f6 w-100 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple"
          onClick={() => changeType(CONST.INTERNATIONAL)}
        >
          International
        </a>
      </div>
      <div className="fl w-third pa2">
        <a
          className="f6 w-100 tc grow no-underline br-pill ph3 pv2 mb2 dib white bg-hot-pink"
          onClick={() => changeType(CONST.DOMESTIC)}
        >
          Domestic
        </a>
      </div>
    </div>
  );
};

export default MatchType;
