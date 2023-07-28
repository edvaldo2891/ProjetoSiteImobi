import React from 'react';
import FeaturedProjects from './FeaturedProjects';
import InfoDetails from './InfoDetails';
import MiniManners from './MiniBanners';
import Slider from './Slider';

function Home() {
  return (
    <div>
      <Slider />
      <div className="container">
        <MiniManners />
        <FeaturedProjects />
        <InfoDetails />
      </div>
    </div>
  );
}

export default Home;
