import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchParagraphs } from '../actions/actions';
import styles from './styles.css';

class ParserForm extends Component {

  constructor(props){
    super(props);

    this.startParsing = this.startParsing.bind(this);
  }

  static propTypes = {
    fetchParagraphs: PropTypes.func.isRequired
  };

  startParsing(){
    let url = this.input.value;

    if (url) {
      this.props.fetchParagraphs(url);
    } else {
      console.error('Please paste url');
    }
  }

  render() {
    return (
      <div className={styles.formContainer}>

        <p>Put URL for parsing</p>

        <input
          className={styles.textInput}
          type='text'
          ref={(input) => { this.input = input; }}
        />
        <br />

        <button onClick={this.startParsing}>Parse</button>

      </div>
    )
  }
}

export default connect(null, { fetchParagraphs })(ParserForm)
