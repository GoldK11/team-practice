import React from 'react';
import 'src/css/cards/BookCard.css';
import ButtonBase from '@material-ui/core/ButtonBase';

function BookCard(props) {
  const { data } = props;
  return (
    <ButtonBase className={`BookCard ${data.customClass}`}>
      <div>
        <div className="Title SizeRes16 Color100">{data.title}</div>
        <div className="Text Color60">{data.text}</div>
      </div>
    </ButtonBase>
  );
}

export default BookCard;
