import React from 'react';
import Banner from 'src/components/contents/Banner';
import Slider from 'src/components/contents/Slider';
import WordBook from 'src/components/pages/WordBook';
import Simulation from 'src/components/contents/Simulation';
import Temp from 'src/components/contents/Temp';
import Support from 'src/components/contents/Support';
import 'src/css/pages/Home.css';

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Slider />
      <WordBook />
      <Simulation />
      <Temp />
      <Support />
    </div>
  );
}

export default Home;
