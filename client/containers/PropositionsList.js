import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendChanges } from '../actions/asyncActions';
import EditableParagraph from '../components/EditableParagraph';
import { BeatLoader } from 'react-spinners';

class PropositionsList extends PureComponent {

  static propTypes = {
    paragraphs: PropTypes.array.isRequired,
    articleUrl: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
  };

  render() {

    const { paragraphs } = this.props;

    const listItems = paragraphs.map((item, i) =>
      <EditableParagraph
        key={i}
        content={item}
        sendChanges={this.props.sendChanges}
        articleUrl={this.props.articleUrl}
      />
    );

    return (
      <div>
        <BeatLoader
          color='#487195'
          loading={this.props.loading} />

        {listItems}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    paragraphs: state.paragraphs,
    articleUrl: state.url,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { sendChanges })(PropositionsList)
