import React, { Component } from 'react';
import './App.css';
import Contact from './Contact.js'
import About from './About.js'
import Projects from './Projects.js'
import Blog from './Blog.js'
import { Modal, Tabs, Tab } from 'react-bootstrap'

class App extends Component {

  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  open = (event) => {
    this.setState({
      showModal: true
    })
  }

  close = (event) => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <div style={{paddingTop:"15px", paddingLeft:"15px"}}>
              <a href='https://www.linkedin.com/in/ykumawat/' target="_blank" rel="noopener noreferrer"><img className="social-media-links" src={require('./images/linkedin.png')} alt="linkedin"/></a>
            </div>
            <div style={{paddingTop:"15px", paddingLeft:"15px"}}>
              <a href='https://github.com/ykumawat' target="_blank" rel="noopener noreferrer"><img className="social-media-links" src={require('./images/github.svg')} alt="github"/></a>
            </div>
            <div style={{paddingTop:"15px", paddingLeft:"15px"}}>
              <a href='https://twitter.com/yamini011' target="_blank" rel="noopener noreferrer"><img className="social-media-links" src={require('./images/twitter.png')} alt="twitter"/></a>
            </div>
          </div>
        <div className="col-3 name">
            Yamini
        </div>
        <div className="col-2">
          <img className="profile-image" src={require('./images/yk_photo.jpg')} alt="Yamini Kumawat"/>
        </div>
        <div className="col-3 name">
            Kumawat
        </div>
        <div className="col-2">
          <Contact/>
          <div style={{paddingTop:"15px", paddingLeft:"60px"}}>
            <button style={{borderStyle:"none"}} onClick={this.open}><img className="social-media-links" src={require('./images/cv.png')} alt="resume"/></button>
            <Modal show={this.state.showModal} onHide={this.close}>
                <iframe style={{width:"900px", height:"700px"}} src={require('./images/YKumawatNov2017resume.pdf')}></iframe>
            </Modal>
          </div>
        </div>
      </div>
      <div>
        <Tabs defaultActiveKey={2} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="About Me"><About/></Tab>
          <Tab eventKey={2} title="Technical Projects"><Projects/></Tab>
          <Tab eventKey={3} title="Blog"><Blog/></Tab>
        </Tabs>
      </div>
    </div>
    );
  }
}

export default App;

// <img src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/0ad/090/0b38c4b.jpg' classNameName="App-logo" alt="Yamini Kumawat" />
// <h1>Yamini Kumawat</h1>
