import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

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
      <div className={styles.paragraphContainer}>
        <p className={styles.subheader}>ORIGINAL TEXT</p>
        {originalText}
        <br/>

        <p className={styles.subheader}>USERS VERSION</p>
        {usersText}

        <br/>
        <button className={styles.button} onClick={() => this.props.removeParagraph({ _id })}>DELETE</button>
        <button className={styles.button} onClick={() => {
          this.props.approveParagraph({ _id, isApproved: true })}}>APPROVE</button>


      </div>
    )
  }
}
