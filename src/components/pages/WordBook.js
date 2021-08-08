import React from 'react';
import { useLocation } from 'react-router-dom';
import BookCard from 'src/components/cards/BookCard';
import CONST from 'src/assets/js/const';
import DATA from 'src/assets/js/tempData';
import 'src/css/pages/WordBook.scss';

function WordBook() {
  const tempData = DATA.CARD.BOOK;

  return (
    <div
      className={
        useLocation().pathname === CONST.ROUTER.PATH.MAIN
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
