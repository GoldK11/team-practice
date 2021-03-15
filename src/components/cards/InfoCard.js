import React from 'react';
import 'src/css/cards/InfoCard.css';
import ButtonBase from '@material-ui/core/ButtonBase';
// import { useHistory } from 'react-router-dom';
// import CONST from 'src/assets/js/const';
import Navigation from 'src/components/utils/Navigation';
import { getter } from 'src/assets/js/router';

function InfoCard(props) {
  const { data } = props;
  let subElement;
  if (data.index === 6) {
    const nav = getter('quick', true);
    subElement = <Navigation item={nav} />;
  } else {
    subElement = data.text;
  }

  const element =
    data.index === 1 ? (
      <div className="Size28">{data.title}</div>
    ) : (
      <div>
        <div className="Img Size28 BackWhite">{data.img}</div>
        <div className="Title Color100 Size24">{data.title}</div>
        <div className="Text Color60 Size16">{subElement}</div>
      </div>
    );

  return (
    <ButtonBase className={`InfoCard ${data.customClass}`}>
      {element}
    </ButtonBase>
  );
}

export default InfoCard;
