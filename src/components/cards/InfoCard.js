import React from 'react';
import 'src/css/cards/InfoCard.css';

function InfoCard(props) {
  const { data } = props;
  return (
    <div className={`InfoCard ${data.customClass}`}>
      <div className="Title Color100 SizeRes16">{data.title}</div>
      <div className="Img SizeRes16 BackWhite">{data.img}</div>
      <div className="Text Color60 SizeRes10">{data.text}</div>
    </div>
  );
}

export default InfoCard;
