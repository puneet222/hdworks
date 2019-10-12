import React from "react";

const Header = () => {
  return (
    <header className="bg-white black-80 tc pv3 avenir">
      <h1 className="mt2 mb0 baskerville i fw1 f1">Schedule</h1>
      <nav className="bt bb tc mw7 center mt2">
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
          href="/"
        >
          UPCOMING
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
          href="/portfolio"
        >
          RUNNING
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
          href="/shop"
        >
          COMPLETED
        </a>
      </nav>
    </header>
  );
};

export default Header;
