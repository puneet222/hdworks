import React, { useContext } from "react";
import CricketContext from "../../context/cricketContext";

const SeriesItem = ({ series }) => {
  const cricketContext = useContext(CricketContext);
  const { setCurrentSeries } = cricketContext;
  return (
    <article
      className="center w-90 mw6-ns br2 hidden ba b--black-20 mv2 grow"
      onClick={() =>
        setCurrentSeries({
          seriesID: series.seriesID,
          seriesName: series.seriesName
        })
      }
    >
      <h1 className="f5 bg-near-white br2 br--top black-60 mv0 pv2 ph3">
        {series.seriesName}
        <svg
          className="w1 absolute right-1"
          data-icon="chevronRight"
          viewBox="0 0 32 32"
          style={{ fill: "currentcolor" }}
        >
          <title>chevronRight icon</title>
          <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
        </svg>
      </h1>
      <div className="bt b--black-10">
        <article className="pa3-l pa3-m pa3-ns" data-name="slab-stat-small">
          <h3 className="f6 pl3 ttu tracked">{series.league}</h3>
          <div className="cf">
            <dl className="fl fn-l w-third dib-l lh-title">
              <dd className="f6 fw4 ml0 tc">ODI Matches</dd>
              <dd className="f3 fw6 ml0 tc">
                {series.Odicount ? series.Odicount : 0}
              </dd>
            </dl>
            <dl className="fl fn-l w-third dib-l lh-title">
              <dd className="f6 fw4 ml0 tc">T20 Matches</dd>
              <dd className="f3 fw6 ml0 tc">
                {series.T20count ? series.T20count : 0}
              </dd>
            </dl>
            <dl className="fl fn-l w-third dib-l lh-title">
              <dd className="f6 fw4 ml0 tc">Test Maches</dd>
              <dd className="f3 fw6 ml0 tc">
                {series.Testcount ? series.Testcount : 0}
              </dd>
            </dl>
          </div>
        </article>
      </div>
    </article>
  );
};

export default SeriesItem;
