import React from 'react';
import 'src/css/cards/BackCard.scss';

function BackCard(props) {
  const { name } = props;
  return <div className={`BackCard__${name} Back40`} />;
}

export default BackCard;
