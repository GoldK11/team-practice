import React from 'react';
import BookCard from 'src/components/cards/BookCard';
import 'src/css/pages/WordBook.css';

function WordBook() {
  const tempList = [
    {
      index: 1,
      title: '수능영어',
      text: '2021 수특',
      customClass: 'BackWhite TopLeft',
    },
    {
      index: 2,
      title: '해리포터',
      text: '해포 원서',
      customClass: 'BackWhite',
    },
    {
      index: 3,
      title: '소논문',
      text: 'Operating Systems: Three Easy Pieces',
      customClass: 'BackWhite TopRight',
    },
    {
      index: 4,
      title: 'CNN',
      text: '2020/05 ~ 2020/12 CNN 뉴스 단어',
      customClass: 'BackWhite BottomLeft',
    },
    {
      index: 5,
      title: '노래가사',
      text: '2020 팝송 가사',
      customClass: 'BackWhite',
    },
    {
      index: 6,
      title: '추가',
      text: '+',
      customClass: 'BackWhite BottomRight',
    },
  ];

  return (
    <div className="WordBook">
      {tempList.map(ob => (
        <BookCard data={ob} key={ob.index} />
      ))}
    </div>
  );
}

export default WordBook;
