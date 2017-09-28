import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AdminParagraph extends Component {

  static propTypes = {
    originalText: PropTypes.string.isRequired,
    usersText: PropTypes.string.isRequired,
    articleUrl: PropTypes.string.isRequired,
    removeParagraph: PropTypes.func.isRequired,
    approveParagraph: PropTypes.func.isRequired
  };


  render() {
    const { _id, originalText, usersText, articleUrl } = this.props;

    return (
      <div>
        <p>ORIGINAL TEXT</p>
        {originalText}
        <br/>

        <p>USERS VERSION</p>
        {usersText}

        <br/>
        <button className='' onClick={() => this.props.removeParagraph({ _id })}>DELETE</button>
        <button className='' onClick={() => {
          this.props.approveParagraph({ _id, isApproved: true })}}>APPROVE</button>

        <br/>
        <br/>
        <br/>

      </div>
    )
  }
}
