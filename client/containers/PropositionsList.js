import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sendChanges } from '../actions/actions'
import EditableParagraph from '../components/EditableParagraph'

class PropositionsList extends Component {

  static propTypes = {
    paragraphs: PropTypes.array.isRequired,
    articleUrl: PropTypes.string.isRequired
  };

  render() {
    const { paragraphs } = this.props;

    const listItems = paragraphs.map((item, i) =>
      <EditableParagraph
        key={i}

        index={i}

        content={item}
        sendChanges={this.props.sendChanges}
        articleUrl={this.props.articleUrl}
      />
    );

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    paragraphs: state.paragraphs,
    articleUrl: state.url
  }
}

export default connect(mapStateToProps, { sendChanges })(PropositionsList)
