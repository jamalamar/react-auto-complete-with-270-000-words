import React, { Component } from 'react';
import './App.css';
import Autocomplete from './autocomplete.js';
import words from 'an-array-of-english-words'
import Modal from './modal.js'

class App extends Component {

	state = {
    isModalOpen: false
  	};

  	toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  	};

  render(){
  return (
    <div className="App">
      <div>
        <button onClick={this.toggleState}>Open Modal</button>
        <div>Modal is: {this.state.isModalOpen ? "Open" : "Closed"}</div>
        {this.state.isModalOpen && (
          <Modal
            id="modal"
            isOpen={this.state.isModalOpen}
            onClose={this.toggleState}
          >
            <div className="box-body">I am the content of the modal</div>
          </Modal>
        )}
      </div>
    <h1>Choose from 270,000 words!</h1>
      <Autocomplete
        options={words}
      />
    </div>
  );
}
};

export default App;
