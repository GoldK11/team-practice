import React from 'react';
import Banner from 'src/components/contents/Banner';
import Slider from 'src/components/contents/Slider';
import WordBook from 'src/components/pages/WordBook';
import 'src/css/pages/Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="Wrapper MainBody2" />
      <Banner />
      <Slider />
      <WordBook />
    </div>
  );
}

export default Home;
