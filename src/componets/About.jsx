import React from 'react';

export default function AboutPage(props) {
  return (
    <div className="container">
      <h1 className="title">About Us</h1>
      <div className="content fade-in">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="About" className="about-image" />
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dui vel odio cursus rutrum a eget purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed convallis risus at purus lobortis consectetur. Mauris sed aliquam ipsum. Fusce in eleifend leo. Integer iaculis consequat nisl, a gravida ligula volutpat a. Aliquam erat volutpat. this is about me if you need more info about me please send me mail
        </p>
      </div>
      
    </div>
  );
}
