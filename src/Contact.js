import React from 'react'
import { Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export default class Contact extends React.Component {

  constructor() {
    super()
    this.state = {
      showModal: false,
      type: '',
      message: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      type: 'preparing to send',
      message: 'Sending...'
    }, this.sendMessage)
  }

  sendMessage() {
    console.log("still working on this")
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleChangeMessage = (event) => {
    this.setState({
      message: event.target.value
    })
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
      <div style={{paddingTop:"15px", paddingLeft:"40px"}}>
        <button type="button" className="btn btn-primary" onClick={this.open}>
          Contact Me!
        </button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
          <Modal.Title>Message me for collaboration on projects or networking!
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="formControlsText">
              <ControlLabel>Name*</ControlLabel>
              <FormControl type="text" label="Name" placeholder="Your Full Name" onChange={this.handleChangeName}/>
            </FormGroup>

            <FormGroup controlId="formControlsEmail">
              <ControlLabel>Email*</ControlLabel>
              <FormControl type="text" label="Email" placeholder="Your Email" onChange={this.handleChangeEmail}/>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Message*</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Your Message...(Funny gifs always welcome)" onChange={this.handleChangeMessage}/>
            </FormGroup>

            A copy of this message will be emailed to you. I always respond to messages within 48 hours!
            <br/><br/>
            <button className="btn btn-primary">Submit</button>
            </form>
          </Modal.Body>
          <Modal.Footer>


          </Modal.Footer>

        </Modal>
      </div>
    )
  }

}
//
// <Modal.Content>
//   <Form onSubmit={this.handleSubmit}>
//     <Form.Input onChange={this.handleChangeName} placeholder="Name"/>
//     <Form.TextArea onChange={this.handleChangeMessage} placeholder="Message"/>
//     <Form.Button>Submit</Form.Button>
//   </Form>
// </Modal.Content>
