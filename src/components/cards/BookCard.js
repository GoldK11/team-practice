import React from 'react';
import 'src/css/cards/BookCard.css';

function BookCard(props) {
  const { data } = props;
  return (
    <div className={`BookCard ${data.customClass}`}>
      <div className="Title SizeRes16 Color100">{data.title}</div>
      <div className="Text Color60">{data.text}</div>
    </div>
  );
}

export default BookCard;
