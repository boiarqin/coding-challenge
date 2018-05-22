import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import SearchResults from './components/searchResults/searchResults';

describe('App component tests', () => {
    it('renders without crashing', () => {
      const dispatchCloseDetailsModalMock = jest.fn();
      const dispatchLoadSearchResultsMock = jest.fn();

      shallow(<App
        selectedSpot={null}
        spotDetailsModalOpen={false}
        dispatchCloseDetailsModal={dispatchCloseDetailsModalMock}
        dispatchLoadSearchResults={dispatchLoadSearchResultsMock}
      />);
    });

    it('renders a SearchResults element', () => {
      const dispatchCloseDetailsModalMock = jest.fn();
      const dispatchLoadSearchResultsMock = jest.fn();

      const wrapper = shallow(<App
        selectedSpot={null}
        spotDetailsModalOpen={false}
        dispatchCloseDetailsModal={dispatchCloseDetailsModalMock}
        dispatchLoadSearchResults={dispatchLoadSearchResultsMock}
      />);
      expect(wrapper.find(SearchResults).length).toEqual(1);
    })
});