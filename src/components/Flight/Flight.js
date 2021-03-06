import React from 'react';
import './Flight.scss';
import Leg from '../Leg/Leg';

const currencySymbolMap = {
  RUB: "\u20bd",
  USD: "$",
}

function Flight({ data }) {
  const { flight: { carrier, price, legs } } = data;

  const adultPrice = price.passengerPrices.find((item) => item.passengerType.uid === "ADULT").singlePassengerTotal;
  const adultPriceFigure = parseInt(adultPrice.amount, 10);
  const adultPriceCurrency = currencySymbolMap[adultPrice.currencyCode];

  return (
    <article className="flight" >
      <div className="flight__header" >
        <img className="flight__airline-logo" alt={carrier.caption} />

        <div className="flight__price" >
          <span className="flight__price-tag" >{adultPriceFigure} {adultPriceCurrency}</span>
          <span className="flight__price-caption" >Стоимость для одного взрослого пассажира</span>
        </div>
      </div>

      <ul className="flight__leg-list" >
        {legs.map((leg, index) => <Leg data={leg} key={index} />)}
      </ul>

      <button className="flight__button button" >ВЫБРАТЬ</button>
    </article>
  );
}

export default Flight;
