import {
    FETCH_SEARCH_RESULTS,
    FETCH_SEARCH_RESULTS_ERROR,
    UPDATE_SEARCH_RESULTS,
    OPEN_DETAILS_MODAL,
    CLOSE_DETAILS_MODAL
} from '../actions';

export const initialAppState = () => ({
    loading: false,
    spotDetailsModalOpen: false,
    searchParameters: {
      city: "Chicago",
      cityLink: "/chicago",
      near: "Millennium Park"
    },
    selectedSearchResultIndex: null,
    searchResults: []
  })

const appReducer = (state=initialAppState(), action) => {
    switch(action.type) {
        case FETCH_SEARCH_RESULTS:
            return {
                ...state,
                loading: true
            };
        case FETCH_SEARCH_RESULTS_ERROR:
            return {
                ...state,
                loading: false
            };
        case UPDATE_SEARCH_RESULTS:
            return {
                ...state,
                loading: false,
                searchResults: action.data
            };
        case OPEN_DETAILS_MODAL:
            const isValidNumber = (typeof action.selectedSearchResultIndex === "number")
                && action.selectedSearchResultIndex >= 0
                && action.selectedSearchResultIndex < state.searchResults.length;
            return {                
                ...state,
                spotDetailsModalOpen: isValidNumber,
                selectedSearchResultIndex: isValidNumber ? action.selectedSearchResultIndex : null,
            };
        case CLOSE_DETAILS_MODAL:
            return {
                ...state,
                spotDetailsModalOpen: false,
                selectedSearchResultIndex: null,
            };
        default:
            return state;
    }
}

export default appReducer;