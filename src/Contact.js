import React from 'react'
import { Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export default class Contact extends React.Component {

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
      <div style={{paddingTop:"15px", paddingLeft:"40px"}}>
        <button type="button" className="btn btn-primary" onClick={this.open}>
          Contact Me!
        </button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdn38-9HUJxStgzdNa4InP6giu7kvNV2eJ3PezMzWHMex5IEw/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
