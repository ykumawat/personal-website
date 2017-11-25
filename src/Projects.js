import React from 'react'
import { Carousel } from 'react-bootstrap'
import Gist from 'react-gist'

class Projects extends React.Component {

  render() {
    return (
      <div style={{paddingTop:"20px"}}>
        <Carousel>
          <Carousel.Item>
            <div className="slide-container">
              <button className="project-demo-button-link">Demo</button>
              <a href="https://github.com/ykumawat/ss_final_project" target="_blank" rel="noopener noreferrer"><button className="project-code-link">Code</button></a>
              <div>
                <div className="project-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/FP4Kir2us30" frameborder="0" gesture="media" allowFullScreen></iframe>
                </div>
                <div className="project-code-snippet">
                  <iframe height="315px" width="360px" src="https://repl.it/@yamini011/SSsample?lite=true"></iframe>
                </div>
              </div>
            </div>
          <Carousel.Caption style={{color: "#91736C", textShadow: "none", paddingBottom: "10px"}}>
            <h3>S+S</h3>
            <p>Easily and efficiently manage contacts and notes with S+S, an image-to-text contact and document creator.</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="slide-container">
            <button className="project-demo-button-link">Demo</button>
            <div className="dropdown">
              <button className="project-code-link">Code</button>
              <div className="dropdown-content">
                <a href="https://github.com/ykumawat/nyc-rec-frontend" target="_blank" rel="noopener noreferrer">Frontend</a>
                <a href="https://github.com/ykumawat/nyc-rec-backend" target="_blank" rel="noopener noreferrer">Backend</a>
              </div>
            </div>
            <div>
            <div className="project-video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/q1lJvwAuo0c" frameborder="0" gesture="media" allowFullScreen></iframe>
            </div>
            <div className="project-code-snippet">
              <iframe height="315px" width="360px" src="https://repl.it/@yamini011/NYCRecRefSnippet?lite=true"></iframe>
            </div>
            </div>
          </div>
          <Carousel.Caption style={{color: "#91736C", textShadow: "none", paddingBottom: "10px"}}>
            <h3>NYC Rec Ref</h3>
            <p>Discover NYC recreational areas and favorite them on your in-app user profile for easy accessibility.</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="slide-container">
            <button className="project-demo-button-link">Demo</button>
            <a href="https://github.com/ykumawat/fake-stockmarket" target="_blank" rel="noopener noreferrer"><button className="project-code-link">Code</button></a>
            <div>
              <div className="project-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9-p6BxYvOcM" frameborder="0" gesture="media" allowFullScreen></iframe>
              </div>
              <div className="project-code-snippet">
                <iframe height="315px" width="360px" src="https://repl.it/@yamini011/YaKushlySnippet?lite=true"></iframe>
              </div>
            </div>
          </div>
          <Carousel.Caption style={{color: "#91736C", textShadow: "none", paddingBottom: "10px"}}>
            <h3>YaKush.ly</h3>
            <p>Replicated a stock market and money sharing app using user created content.</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="slide-container">
            <a href="https://github.com/ykumawat/module-one-final-project-guidelines-web-071717" target="_blank" rel="noopener noreferrer"><button className="project-code-link" style={{marginLeft: '900px'}}>Code</button></a>
            <div>
              <div className="project-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/shbSK6FcWkM" frameborder="0" gesture="media" allowFullScreen></iframe>
              </div>
              <div className="project-code-snippet">
                <iframe height="315px" width="360px" src="https://repl.it/@yamini011/WhatsCookinSnippet?lite=true"></iframe>
              </div>
            </div>
          </div>
          <Carousel.Caption style={{color: "#91736C", textShadow: "none", paddingBottom: "10px"}}>
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
