import React from 'react';
import Banner from 'src/components/contents/Banner';
import Slider from 'src/components/contents/Slider';
import WordBook from 'src/components/pages/WordBook';
import Simulation from 'src/components/contents/Simulation';
import WordShare from 'src/components/pages/WordShare';
import Support from 'src/components/contents/Support';
import 'src/css/pages/Main.scss';

function Main() {
  return (
    <div className="Main">
      <Banner />
      <Slider />
      <WordBook />
      <Simulation />
      <WordShare />
      <Support />
    </div>
  );
}

export default Main;
