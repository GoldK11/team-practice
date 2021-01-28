import React from 'react';
import 'src/css/cards/InfoCard.css';
import ButtonBase from '@material-ui/core/ButtonBase';

function InfoCard(props) {
  const { data } = props;
  return (
    <ButtonBase className={`InfoCard ${data.customClass}`}>
      <div>
        <div className="Title Color100 SizeRes16">{data.title}</div>
        <div className="Img Size28 BackWhite">{data.img}</div>
        <div className="Text Color60 SizeRes10">{data.text}</div>
      </div>
    </ButtonBase>
  );
}

export default InfoCard;
