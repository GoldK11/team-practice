import React from 'react';
import 'src/css/cards/InfoCard.scss';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory } from 'react-router-dom';
import CONST from 'src/assets/js/const';

function InfoCard(props) {
  const { data } = props;
  const history = useHistory();

  const handleClick = () => {
    if (data.index !== 6) return;
    history.push(CONST.ROUTER.PATH.ANALYZE);
  };

  const element =
    data.index === 1 ? (
      <div className="Size28">{data.title}</div>
    ) : (
      <div onClick={handleClick} aria-hidden="true">
        <div className="Img Size28 BackWhite">{data.img}</div>
        <div className="Title Color100 Size24">{data.title}</div>
        <div className="Text Color60 Size16">{data.text}</div>
      </div>
    );

  return (
    <ButtonBase className={`InfoCard ${data.customClass}`}>
      {element}
    </ButtonBase>
  );
}

export default InfoCard;
