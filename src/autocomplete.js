import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class Autocomplete extends Component {

    state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
    };


  static propTypes = {
  options: PropTypes.instanceOf(Array).isRequired
  };

  render() {
    return (
      <React.Fragment>
        <div className="search">
          <input type="text" className="search-box" />
          <input type="submit" value="" className="search-btn" />
        </div>
      </React.Fragment>
    );
  }
}

export default Autocomplete;