import React from 'react';
import { useLocation } from 'react-router-dom';
import BookCard from 'src/components/cards/BookCard';
import CONST from 'src/assets/js/const';
import 'src/css/pages/WordBook.css';

function WordBook() {
  const tempData = CONST.DATA.CARD.BOOK;

  return (
    <div
      className={
        useLocation().pathname === CONST.ROUTER.PATH.HOME
          ? 'WordBook'
          : 'WordBook2'
      }
    >
      {tempData.map(ob => (
        <BookCard data={ob} key={ob.index} />
      ))}
    </div>
  );
}

export default WordBook;
