import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getParagraphs } from '../actions/asyncActions';
import { setLoading } from '../actions/actions';
import styles from './styles.css';

class ParserForm extends PureComponent {

  constructor(props){
    super(props);

    this.startParsing = this.startParsing.bind(this);
  }

  static propTypes = {
    getParagraphs: PropTypes.func.isRequired
  };

  startParsing(){
    let url = this.input.value;

    if (url) {
      this.props.setLoading(true);
      this.props.getParagraphs(url);
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

export default connect(null, { getParagraphs, setLoading })(ParserForm)
