import React, { Component } from 'react'
import PropTypes from 'prop-types'//

import styles from './styles.css'


export default class EditableParagraph extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    articleUrl: PropTypes.string.isRequired,
    sendChanges: PropTypes.func.isRequired
  };


  send(){
    this.props.sendChanges({
      articleUrl: this.props.articleUrl,
      originalText: this.props.content,
      usersText: this.textarea.value
    })
  }

  render() {
    const { content } = this.props;

    return (
      <div className={styles.paragraphContainer}>

        <p className={styles.subheader}>ORIGINAL TEXT</p>
        {content}
        <p className={styles.subheader}>USERS VERSION</p>

        <textarea
          id='changedContent'
          ref={(textarea) => { this.textarea = textarea; }}
          cols='120'
          rows='4'
          defaultValue={content}
        />

        <button
          className={styles.button}
          onClick={() => this.send()}>Send Changes</button>

      </div>
    )
  }
}
