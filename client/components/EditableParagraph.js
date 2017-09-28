import React, { Component } from 'react'
import PropTypes from 'prop-types'//


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
      <div>
        <p>ORIGINAL TEXT</p>
        {content}
        <br/>

        <p>USERS VERSION</p>
        <textarea
          id='changedContent'
          ref={(textarea) => { this.textarea = textarea; }}
          cols='120'
          rows='4'
          defaultValue={content}
        />

        <br/>

        <button onClick={() => this.send()}>Send Changes</button>
        <br/>
        <br/>
        <br/>

      </div>
    )
  }
}
