import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BackButton extends Component {
  render() {
    return (
      <button type="button" name="back" className="back-button" onClick={this.props.onClick}>
        <span className="back-button__icon"></span> Back to Collection
      </button>
    );
  }
}

BackButton.propTypes = {
  onClick: PropTypes.func
}

export default BackButton;
