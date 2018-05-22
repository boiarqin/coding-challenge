import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { closeDetailsModal, loadSearchResults } from './actions';
import SearchResults from './components/searchResults/searchResults';
import SpotDetailsModal from './components/spotDetailsModal/spotDetailsModal';
import { getSelectedSpot } from './selectors';
import { IAppState, ISpot } from './types';

import './App.css';

interface IAppProps {
  selectedSpot: ISpot | null;
  spotDetailsModalOpen: boolean;
  dispatchCloseDetailsModal: () => Dispatch<IAppState>;
  dispatchLoadSearchResults: () => Dispatch<IAppState>;
}

const mapStateToProps = (state: IAppState, ownProps: IAppProps) => ({
  ...ownProps,
  selectedSpot: getSelectedSpot(state),
  spotDetailsModalOpen: state.spotDetailsModalOpen
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => ({
  dispatchCloseDetailsModal: () => dispatch(closeDetailsModal()),
  dispatchLoadSearchResults: () => dispatch(loadSearchResults())
});

export class App extends React.Component<IAppProps> {
  public componentDidMount() {
    this.props.dispatchLoadSearchResults();
  }
  public render() {
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

export default connect<IAppProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
