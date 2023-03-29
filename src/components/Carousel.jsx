import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/Carousel.css"

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://post.healthline.com/wp-content/uploads/2020/02/man-exercising-plank-push-up-1200x628-facebook.jpg"
          alt="First slide"
          />
        <Carousel.Caption>
          <h3 className="slide-label">Working out reimagined</h3>
          <p className="slide-para">Enroll today to start your fitness journey!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
<video autoplay loop muted role="presentation" class="HeroModule__StyledVideo-sc-1l6ebmh-4 YFzqO">
<source src="//videos.ctfassets.net/u860i9c783wb/5JQkn7kFZ7CGEL72gMaIz6/c5f845fc744670f316fbebc1c6608b06/SC_EDIT_15sec_WANT_NEED_NO_AUDIO.mp4" type="video/mp4" />
</video>

        <Carousel.Caption>
        <h3 className="slide-label">A new way to workout</h3>
          <p className="slide-para">Begin your fitness journey now!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thehealthy.com/wp-content/uploads/2018/08/shutterstock_713186611.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className="slide-label">Reinvented workout machine</h3>
          <p className="slide-para">Find a local gym near you or enroll online today!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;