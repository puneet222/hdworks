import React, { useContext } from "react";
import CricketContext from "../context/cricketContext";
import * as CONST from "../Utils/constants";

const Header = () => {
  const cricketContext = useContext(CricketContext);
  const { changeStatus } = cricketContext;
  return (
    <header className="bg-white black-80 tc pv3 avenir">
      <h1 className="mt2 mb0 baskerville i fw1 f1">Schedule</h1>
      <nav className="bt bb tc mw7 center mt2">
        <a
          className="f6 f5-l link bg-animate hover-bg-lightest-blue dib pa3 ph4-l"
          href="#0"
          onClick={() => changeStatus(CONST.UPCOMING)}
        >
          UPCOMING
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
          href="#0"
          onClick={() => changeStatus(CONST.LIVE)}
        >
          RUNNING
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
          href="#0"
          onClick={() => changeStatus(CONST.COMPLETED)}
        >
          COMPLETED
        </a>
      </nav>
    </header>
  );
};

export default Header;
