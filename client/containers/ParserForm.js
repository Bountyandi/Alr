import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchParagraphs } from '../actions/actions'

class ParserForm extends Component {

  constructor(props){
    super(props);

    this.startParsing = this.startParsing.bind(this);
  }

  static propTypes = {
    fetchParagraphs: PropTypes.func.isRequired
  }


  componentDidMount(){
    let url = 'https://www.dagbladet.no/kjendis/supermodellen-ble-beskyldt-for-a-ikke-tipse-etter-et-barbesok-na-svarer-hun-pa-kritikken/68573788'

    this.props.fetchParagraphs(url);
  }

  startParsing(){



    let url = this.input.value;

    if (url) {
      this.props.fetchParagraphs(url);
    } else {
      console.log('Please paste url');
    }

  }

  render() {
    let TEMP_URL = 'https://www.dagbladet.no/kjendis/supermodellen-ble-beskyldt-for-a-ikke-tipse-etter-et-barbesok-na-svarer-hun-pa-kritikken/68573788'
    return (
      <div>
        <p>Put URL for parsing</p>
        <input
          type='text'
          defaultValue={TEMP_URL}
          ref={(input) => { this.input = input; }}
        />
        <br />

        <button onClick={this.startParsing}>Parse</button>

      </div>
    )
  }

}


export default connect(null, { fetchParagraphs })(ParserForm)
