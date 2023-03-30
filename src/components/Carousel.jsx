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
      <video autoPlay loop muted role="presentation" className="HeroModule__StyledVideo-sc-1l6ebmh-4 YFzqO">
          <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B04Gfy1teiz3sdqe6/videoblocks-61efc0e8d5afff13a5ae178b_ratdfgyfc__816a62e50f2c31b938b25623399f409b__P360.mp4" type="video/mp4" />
          </video>
        <Carousel.Caption>
          <h3 className="slide-label">Working out reimagined</h3>
          <p className="slide-para">Enroll today to start your fitness journey!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <video autoPlay loop muted role="presentation" className="HeroModule__StyledVideo-sc-1l6ebmh-4 YFzqO">
          <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B04Gfy1teiz3sdqe6/videoblocks-620121392a9e6f090ea57ff9_sxj2qojwc__8266eadddc3f59a5e22419a6d7dd10d2__P360.mp4" type="video/mp4" />
          </video>
        <Carousel.Caption>
        <h3 className="slide-label">A new way to workout</h3>
          <p className="slide-para">Start today to begin your fitness journey!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <video autoPlay loop muted role="presentation" className="HeroModule__StyledVideo-sc-1l6ebmh-4 YFzqO">
          <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B04Gfy1teiz3sdqe6/videoblocks-fitness-healthy-woman-tired-after-strength-training-exercise-at-gym-slow-motion-close-up-of-tired-female-fit-model-with-standing-and-relaxing-after-intense-workout_htltof-7v__416c31adfbe4aff3a53e4b2f2b12dcfb__P360.mp4" type="video/mp4" />
          </video>
        <Carousel.Caption>
        <h3 className="slide-label">Reinvented workout machine</h3>
          <p className="slide-para">Find a local gym near you or enroll online today!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;