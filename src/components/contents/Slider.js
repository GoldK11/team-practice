import React from 'react';
import InfoCard from 'src/components/cards/InfoCard';
import Slick from 'react-slick';
import DATA from 'src/assets/js/tempData';
// import 'src/css/contents/Slider.css';

function Slider() {
  const tempData = DATA.CARD.INFO;
  return (
    <div className="Slider">
      <Slick dots arrows slidesToShow={4}>
        {tempData.map(ob => (
          <InfoCard data={ob} key={ob.index} />
        ))}
      </Slick>
    </div>
  );
}

export default Slider;
