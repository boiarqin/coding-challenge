import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDetailsModal, loadSearchResults } from './actions';
import { getSelectedSpot } from './selectors';
import SearchResults from './components/searchResults/searchResults';
import SpotDetailsModal from './components/spotDetailsModal/spotDetailsModal';

import './App.css';


const mapStateToProps = (state, props) => ({
  selectedSpot: getSelectedSpot(state),
  spotDetailsModalOpen: state.spotDetailsModalOpen
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCloseDetailsModal: () => dispatch(closeDetailsModal()),
  dispatchLoadSearchResults: () => dispatch(loadSearchResults())
});

class App extends Component {
  componentDidMount() {
    this.props.dispatchLoadSearchResults();
  }
  render() {
    return (
      <div className="App">
        <div className="left-panel">
          <SearchResults/>
        </div>
        <div className="right-panel"/>
        <SpotDetailsModal
          spot={this.props.selectedSpot}
          isOpen={this.props.spotDetailsModalOpen}
          onRequestClose={this.props.dispatchCloseDetailsModal}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
