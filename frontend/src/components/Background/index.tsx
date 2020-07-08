import React from 'react';
import { Fade } from 'react-slideshow-image'

import { BackgroundDiv, BackgroundImg } from './styles'

const fadeImages = [
  '../../assets/backgrounds/bg-youplace1.jpg',
  '../../assets/backgrounds/bg-youplace2.jpg',
  '../../assets/backgrounds/bg-youplace3.jpg',
  '../../assets/backgrounds/bg-youplace4.jpg'
];

const fadeProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex: any, newIndex: any) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Background: React.FC = () => {
  return (
    <BackgroundDiv>
      <Fade {...fadeProperties}>
        <BackgroundImg>
          <img src={fadeImages[0]} />
        </BackgroundImg>
        <BackgroundImg>
          <img src={fadeImages[1]} />
        </BackgroundImg>
        <BackgroundImg>
          <img src={fadeImages[2]} />
        </BackgroundImg>
        <BackgroundImg>
          <img src={fadeImages[3]} />
        </BackgroundImg>
      </Fade>
    </BackgroundDiv>
  )
}

export default Background