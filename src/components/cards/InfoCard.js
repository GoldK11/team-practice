import React from 'react';
import 'src/css/cards/InfoCard.scss';
import ButtonBase from '@material-ui/core/ButtonBase';

function InfoCard(props) {
  const { data } = props;
  let element;

  const handleClick = () => {
    console.log('Click');
  };

  switch (data.index) {
    case 1:
      element = <div className="Size28">{data.title}</div>;
      break;
    case 6:
      element = (
        <div onClick={handleClick} aria-hidden="true">
          <div className="Img Size28 BackWhite">{data.img}</div>
          <div className="Title Color100 Size24">{data.title}</div>
          <div className="Text Color60 Size16">{data.text}</div>
        </div>
      );
      break;
    default:
      element = (
        <div>
          <div className="Img Size28 BackWhite">{data.img}</div>
          <div className="Title Color100 Size24">{data.title}</div>
          <div className="Text Color60 Size16">{data.text}</div>
        </div>
      );
      break;
  }

  return (
    <ButtonBase className={`InfoCard ${data.customClass}`}>
      {element}
    </ButtonBase>
  );
}

export default InfoCard;
