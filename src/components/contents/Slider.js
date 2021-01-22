import React from 'react';
import InfoCard from 'src/components/cards/InfoCard';
import Slick from 'react-slick';
import CONST from 'src/assets/js/const';
// import 'src/css/contents/Slider.css';

function Slider() {
  const tempData = CONST.DATA.CARD.INFO;
  return (
    <div className="Slider">
      <div className="MainBody2" />
      <Slick className="Contents" dots arrows slidesToShow={4}>
        {tempData.map(ob => (
          <InfoCard data={ob} key={ob.index} />
        ))}
      </Slick>
    </div>
  );
}

export default Slider;
