import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class AdminParagraph extends PureComponent {

  constructor(){
    super();

    this.approve = this.approve.bind(this);
    this.remove = this.remove.bind(this);
  }

  static propTypes = {
    originalText: PropTypes.string.isRequired,
    usersText: PropTypes.string.isRequired,
    articleUrl: PropTypes.string.isRequired,
    removeParagraph: PropTypes.func.isRequired,
    approveParagraph: PropTypes.func.isRequired
  };

  approve(){
    let _id = this.props._id;
    this.props.approveParagraph({ _id, isApproved: true });
  }

  remove(){
    let _id = this.props._id;
    this.props.removeParagraph({ _id });
  }

  render() {
    const { originalText, usersText, articleUrl } = this.props;

    return (
      <div className={styles.paragraphContainer}>
        <p className={styles.subheader}>ORIGINAL TEXT</p>
        {originalText}
        <br/>

        <p className={styles.subheader}>USERS VERSION</p>
        {usersText}

        <br/>
        <button className={styles.button} onClick={this.remove}>DELETE</button>
        <button className={styles.button} onClick={this.approve}>APPROVE</button>

      </div>
    )
  }
}
