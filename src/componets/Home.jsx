import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Welcome to Our Medical Center</h1>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000} showArrows={false}>
        <div className="hero">
          <div className="hero-content fade-in">
            <h2 className="hero-title">Quality Healthcare Services</h2>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dui vel odio cursus rutrum a eget purus.
            </p>
            <button className="hero-button">Learn More</button>
          </div>
          {/* <img src="https://picsum.photos/200/300/?blur=2" alt="Hero" className="hero-image" /> */}
        </div>
        <div className="hero">
          <div className="hero-content fade-in">
            <h2 className="hero-title">Advanced Medical Treatments</h2>
            <p className="hero-description">
              Our medical center offers state-of-the-art treatments and procedures to provide the highest quality care to our patients.
            </p>
            <button className="hero-button">Learn More</button>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content fade-in">
            <h2 className="hero-title">Compassionate Healthcare Professionals</h2>
            <p className="hero-description">
              Our dedicated team of healthcare professionals is committed to delivering compassionate care and improving patient outcomes.
            </p>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content fade-in">
            <h2>Personalized Patient Services</h2>
            <p className="hero-description">
              We provide personalized services to meet the unique needs of each patient, ensuring a comfortable and positive healthcare experience.
            </p>
          </div>
        </div>
      </Carousel>
      <div className="services">
        <h2 className="services-title">Our Services</h2>
        <div className="service-card">
          <img src="https://picsum.photos/200/300?grayscale" alt="Service 1" className="service-image" />
          <h3 className="service-title">Service 1</h3>
          <p className="service-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="service-card">
          <img src="https://picsum.photos/200/300?grayscale" alt="Service 2" className="service-image" />
          <h3 className="service-title">Service 2</h3>
          <p className="service-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
    
  );
}
