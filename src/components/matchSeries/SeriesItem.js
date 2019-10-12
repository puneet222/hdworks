import React from "react";

const SeriesItem = ({ series }) => {
  console.log(series);
  return (
    <article className="center w-90 mw6-ns br3 hidden ba b--black-20 mv2">
      <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
        {series.seriesName}
      </h1>
      <div className="bt b--black-10">
        <article class="pa3 pa5-ns" data-name="slab-stat-small">
          <h3 class="f6 ttu tracked">{series.league}</h3>
          <div class="cf">
            <dl class="fl fn-l w-third dib-l w-auto-l lh-title mr5-l">
              <dd class="f6 fw4 ml0 tc">ODI Matches</dd>
              <dd class="f3 fw6 ml0 tc">
                {series.Odicount ? series.Odicount : 0}
              </dd>
            </dl>
            <dl class="fl fn-l w-third dib-l w-auto-l lh-title mr5-l">
              <dd class="f6 fw4 ml0 tc">T20 Matches</dd>
              <dd class="f3 fw6 ml0 tc">
                {series.T20count ? series.T20count : 0}
              </dd>
            </dl>
            <dl class="fl fn-l w-third dib-l w-auto-l lh-title mr5-l">
              <dd class="f6 fw4 ml0 tc">Test Maches</dd>
              <dd class="f3 fw6 ml0 tc">
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
