import React, { Component } from 'react';
import './App.css';
import Contact from './Contact.js'
import { Modal } from 'react-bootstrap'

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
              <a href='https://www.linkedin.com/in/ykumawat/' target="_blank" rel="noopener noreferrer"><img className="social-media-links" src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png' alt="linkedin"/></a>
            </div>
            <div style={{paddingTop:"15px", paddingLeft:"15px"}}>
              <a href='https://github.com/ykumawat' target="_blank" rel="noopener noreferrer"><img className="social-media-links" src='https://image.flaticon.com/icons/svg/25/25231.svg' alt="github"/></a>
            </div>
            <div style={{paddingTop:"15px", paddingLeft:"15px"}}>
              <a href='https://twitter.com/yamini011' target="_blank" rel="noopener noreferrer"><img className="social-media-links" src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-256.png' alt="twitter"/></a>
            </div>
          </div>
        <div className="col-3 name">
            Yamini
        </div>
        <div className="col-2">
          <img className="profile-image" src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/0ad/090/0b38c4b.jpg' alt="Yamini Kumawat"/>
        </div>
        <div className="col-3 name">
            Kumawat
        </div>
        <div className="col-2">
          <Contact/>
          <div style={{paddingTop:"15px", paddingLeft:"60px"}}>
            <button style={{borderStyle:"none"}} onClick={this.open}><img className="social-media-links" src='http://freevector.co/wp-content/uploads/2010/06/52762-job-search-symbol-of-a-hand-holding-cv.png' alt="resume"/></button>
            <Modal show={this.state.showModal} onHide={this.close}>
                <iframe style={{width:"900px", height:"700px"}} src="https://docs.google.com/document/d/e/2PACX-1vRM-Fz0mHHoNE68vr33bU9JiKDiG2iNKN1qz45npTlpsz3osTYPnzV7Ni9Gm114IL_-2IbS7MGsRmEr/pub?embedded=true"></iframe>
            </Modal>
          </div>
        </div>
      </div>
      <div>
        projects go here projects go here projects go here projects go here projects go here projects go here projects go here projects go here
      </div>
    </div>
    );
  }
}

export default App;

// <img src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/0ad/090/0b38c4b.jpg' classNameName="App-logo" alt="Yamini Kumawat" />
// <h1>Yamini Kumawat</h1>
