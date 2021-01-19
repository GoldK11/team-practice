import React from 'react';
import Banner from 'src/components/contents/Banner';
import Slider from 'src/components/contents/Slider';
import 'src/css/pages/Home.css';

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Slider />
    </div>
  );
}

export default Home;
