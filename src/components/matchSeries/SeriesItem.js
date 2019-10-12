import React, { useContext } from "react";
import CricketContext from "../../context/cricketContext";

const SeriesItem = ({ series }) => {
  const cricketContext = useContext(CricketContext);
  const { setCurrentSeries, currentSeries } = cricketContext;
  return (
    <article
      className="center w-90 mw6-ns br3 hidden ba b--black-20 mv2 grow"
      onClick={() =>
        setCurrentSeries({
          seriesID: series.seriesID,
          seriesName: series.seriesName
        })
      }
    >
      <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
        {series.seriesName}
        {currentSeries}
      </h1>
      <div className="bt b--black-10">
        <article className="pa3 pa5-ns" data-name="slab-stat-small">
          <h3 className="f6 ttu tracked">{series.league}</h3>
          <div className="cf">
            <dl className="fl fn-l w-third dib-l w-auto-l lh-title mr5-l">
              <dd className="f6 fw4 ml0 tc">ODI Matches</dd>
              <dd className="f3 fw6 ml0 tc">
                {series.Odicount ? series.Odicount : 0}
              </dd>
            </dl>
            <dl className="fl fn-l w-third dib-l w-auto-l lh-title mr5-l">
              <dd className="f6 fw4 ml0 tc">T20 Matches</dd>
              <dd className="f3 fw6 ml0 tc">
                {series.T20count ? series.T20count : 0}
              </dd>
            </dl>
            <dl className="fl fn-l w-third dib-l w-auto-l lh-title mr5-l">
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
