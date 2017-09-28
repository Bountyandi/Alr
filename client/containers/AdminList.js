import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSavedParagraphs, removeParagraph, approveParagraph } from '../actions/actions';
import AdminParagraph from '../components/AdminParagraph';

class AdminList extends Component {

  static propTypes = {
    removeParagraph: PropTypes.func.isRequired,
    approveParagraph: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.fetchSavedParagraphs();
  }

  render() {
    const { savedParagraphs } = this.props;

    const listItems = savedParagraphs.map((item, i) =>{
      if (!item.isApproved) {
        return <AdminParagraph
          key={i}
          _id={item._id}
          originalText={item.originalText}
          usersText={item.usersText}
          articleUrl={item.articleUrl}
          removeParagraph={this.props.removeParagraph}
          approveParagraph={this.props.approveParagraph}
        />
      }
    });

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    savedParagraphs: state.savedParagraphs
  }
}

export default connect(mapStateToProps, {
  fetchSavedParagraphs,
  removeParagraph,
  approveParagraph
})(AdminList)
