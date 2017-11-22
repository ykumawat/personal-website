import React from 'react'
import { Carousel } from 'react-bootstrap'

class Projects extends React.Component {

  render() {
    return (
      <div style={{paddingTop:"20px"}}>
        <Carousel>
          <Carousel.Item>
            <div className="slide-container">
              <button className="project-demo-button-link">Demo</button>
              <button className="project-code-link">Code</button>
            </div>
          <Carousel.Caption>
            <h3>S+S</h3>
            <p>Easily and efficiently manage contacts and notes with S+S, an image-to-text contact and document creator.</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="slide-container">
            <button className="project-demo-button-link">Demo</button>
            <button className="project-code-link">Code</button>
          </div>
          <Carousel.Caption>
            <h3>NYC Rec Ref</h3>
            <p>Discover NYC recreational areas and favorite them on your in-app user profile for easy accessibility.</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="slide-container">
            <button className="project-demo-button-link">Demo</button>
            <button className="project-code-link">Code</button>
          </div>
          <Carousel.Caption>
            <h3>YaKush.ly</h3>
            <p>Replicated a stock market and money sharing app using user created content.</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="slide-container">
            <button className="project-demo-button-link">Demo</button>
            <button className="project-code-link">Code</button>
          </div>
          <Carousel.Caption>
            <h3>What's Cookin'?</h3>
            <p>Quickly find the perfect recipe using a specific preference and ingredient.</p>
          </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    )
  }
}

export default Projects
