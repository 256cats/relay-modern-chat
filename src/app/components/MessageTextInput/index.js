import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import './css/index.css';
const PropTypes = require('prop-types');

const ENTER_KEY_CODE = 13;

export default class MessageTextInput extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string
  };

  // state = {
  //   text: this.props.text || ''
  // };

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.text) {
  //     this.setState({
  //       text: text
  //     });
  //   }
  // }

  // onChange = e => {
  //   this.setState({ text: e.target.value });
  // };

  onKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.props.onSubmit();
      // this.setState({text: ''});
    }
  };

  render() {
    return (
      <input 
        className="textInput"
        type="text"
        onChange={ this.props.onChange }
        onKeyDown={ this.onKeyDown }
        value={ this.props.text }
      />
    );
  }
}
