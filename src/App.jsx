import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSearchResults } from './actions';
import { getSelectedSpot } from './selectors';
import SearchResults from './components/searchResults/searchResults';
import SpotDetailsModal from './components/spotDetailsModal/spotDetailsModal';

import './App.css';


const mapStateToProps = (state, props) => ({
  selectedSpot: getSelectedSpot(state),
  spotDetailsModalOpen: state.spotDetailsModalOpen
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLoadSearchResults: () => dispatch(loadSearchResults())
});

class App extends Component {
  constructor(props) {
    super(props);
  }
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
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
