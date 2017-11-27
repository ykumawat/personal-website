import React from 'react'
import { Carousel } from 'react-bootstrap'

// <h4>Technologies and libraries used: </h4> <p>Ruby on Rails, JavaScript, React.JS, Redux, PostgreSQL, Google Cloud Vision API, Google Natural Language Processing API</p>

class Projects extends React.Component {

  render() {
    return (
      <div style={{paddingTop:"20px"}}>
        <Carousel>
          <Carousel.Item>
            <div className="slide-container">
              <div className="row">
                <div className="col-4">
                  {/*<button className="project-demo-button-link">Demo - Coming Soon!</button>*/}
                </div>
                <div className="col-4">
                  <h2 style={{color: "#B68FA3", textAlign:"center", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>S+S</h2>
                </div>
                <div className="col-4">
                  <a href="https://github.com/ykumawat/ss_final_project" target="_blank" rel="noopener noreferrer"><button className="project-code-link">Code</button></a>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p style={{color: "#B68FA3", textAlign:"center", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>Easily and efficiently manage contacts and notes with S+S, an image-to-text contact and document creator.</p>
                </div>
              </div>
              <div>
                <div className="project-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/FP4Kir2us30" frameborder="0" gesture="media" allowFullScreen></iframe>
                </div>
                <div className="project-code-snippet">
                  <iframe height="315px" width="360px" src="https://repl.it/@yamini011/SSsample?lite=true"></iframe>
                </div>
              </div>
            </div>
          <Carousel.Caption style={{color: "#B68FA3", textShadow: "none", paddingBottom: "10px", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>
            <h4 style={{textDecoration: "underline", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>Technologies and libraries used:</h4>
            <p>Ruby on Rails, JavaScript, React.js, Redux, PostgreSQL, Google Cloud Vision API, Google Natural Language Processing API</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="slide-container">
            <div className="row">
              <div className="col-4">
                {/*<button className="project-demo-button-link">Demo - Coming Soon!</button>*/}
              </div>
              <div className="col-4">
                <h2 style={{color: "#B68FA3", textAlign:"center", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>NYC Rec Ref</h2>
              </div>
              <div className="col-4">
                <div className="dropdown">
                  <button className="project-code-link">Code</button>
                  <div className="dropdown-content">
                    <a href="https://github.com/ykumawat/nyc-rec-frontend" target="_blank" rel="noopener noreferrer">Frontend</a>
                    <a href="https://github.com/ykumawat/nyc-rec-backend" target="_blank" rel="noopener noreferrer">Backend</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p style={{color: "#B68FA3", textAlign: "center", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>Discover NYC recreational areas and favorite them on your in-app user profile for easy accessibility.</p>
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
          <Carousel.Caption style={{color: "#B68FA3", textShadow: "none", paddingBottom: "10px", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>
            <h4 style={{textDecoration: "underline", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>Technologies and libraries used:</h4>
            <p>JavaScript, React.js, NYC Gov Data, Wunderground API, JWT, BCrypt</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="slide-container">
            <div className="row">
              <div className="col-4">
                {/*<button className="project-demo-button-link">Demo - Coming Soon!</button>*/}
              </div>
              <div className="col-4">
                <h2 style={{color: "#B68FA3", textAlign:"center", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>YaKush.ly</h2>
              </div>
              <div className="col-4">
                <a href="https://github.com/ykumawat/fake-stockmarket" target="_blank" rel="noopener noreferrer"><button className="project-code-link">Code</button></a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p style={{color: "#B68FA3", textAlign: "center", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>Replicated a stock market and money sharing app using user created content.</p>
              </div>
            </div>
            <div>
              <div className="project-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9-p6BxYvOcM" frameborder="0" gesture="media" allowFullScreen></iframe>
              </div>
              <div className="project-code-snippet">
                <iframe height="315px" width="360px" src="https://repl.it/@yamini011/YaKushlySnippet?lite=true"></iframe>
              </div>
            </div>
          </div>
          <Carousel.Caption style={{color: "#B68FA3", textShadow: "none", paddingBottom: "10px", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>
            <h4 style={{textDecoration: "underline", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>Technologies and libraries used:</h4>
            <p>Ruby on Rails, S&P 500 CSV data, JWT, BCrypt</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="slide-container">
            <div className="row">
              <div className="col-4">
              </div>
              <div className="col-4">
                <h2 style={{color: "#B68FA3", textAlign:"center", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>What's Cookin'?</h2>
              </div>
              <div className="col-4">
                <a href="https://github.com/ykumawat/module-one-final-project-guidelines-web-071717" target="_blank" rel="noopener noreferrer"><button className="project-code-link" style={{marginLeft: '900px'}}>Code</button></a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p style={{color: "#B68FA3", textAlign: "center", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>Quickly find the perfect recipe using a specific preference and ingredient.</p>
              </div>
            </div>
            <div>
              <div className="project-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/shbSK6FcWkM" frameborder="0" gesture="media" allowFullScreen></iframe>
              </div>
              <div className="project-code-snippet">
                <iframe height="315px" width="360px" src="https://repl.it/@yamini011/WhatsCookinSnippet?lite=true"></iframe>
              </div>
            </div>
          </div>
          <Carousel.Caption style={{color: "#B68FA3", textShadow: "none", paddingBottom: "10px", fontFamily:"Futura, Trebuchet MS, Arial, sans-serif"}}>
            <h4 style={{textDecoration: "underline"}}>Technologies and libraries used:</h4>
            <p>Ruby, Spoonacular JSON data</p>
          </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    )
  }
}

export default Projects
