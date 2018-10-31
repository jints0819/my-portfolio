import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AboutMe extends React.Component {
  render(){
    return (
      <div className="container">
      <br/>
      <section>
      <h2 className="text-center text-secondary">About</h2>
      <hr className="star-dark"></hr>
      </section>
      <section className="section section--description">
      <ReactCSSTransitionGroup transitionName="box-transition"
      transitionEnterTimeout={500} transitionLeaveTimeout={500}
      transitionAppear={true} transitionAppearTimeout={500}>
        <p className="section__description">
          I am learning to code in the cloud! I like to work hard and learn new things.
          I want to work for a company that will pay me to code in the cloud!
        </p>
      </ReactCSSTransitionGroup>
      </section>
      </div>);
  }

}


export default AboutMe;
