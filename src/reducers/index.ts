import {
    CLOSE_DETAILS_MODAL,
    FETCH_SEARCH_RESULTS,
    FETCH_SEARCH_RESULTS_ERROR,
    OPEN_DETAILS_MODAL,
    UPDATE_SEARCH_RESULTS,
} from '../actions';

export const initialAppState = () => ({
    loading: false,
    searchParameters: {
      city: "Chicago",
      cityLink: "/chicago",
      near: "Millennium Park"
    },
    searchResults: [],
    selectedSearchResultIndex: null,
    spotDetailsModalOpen: false
  })

const appReducer = (state=initialAppState(), action: any) => {
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
                selectedSearchResultIndex: isValidNumber ? action.selectedSearchResultIndex : null,
                spotDetailsModalOpen: isValidNumber,
            };
        case CLOSE_DETAILS_MODAL:
            return {
                ...state,
                selectedSearchResultIndex: null,
                spotDetailsModalOpen: false,
            };
        default:
            return state;
    }
}

export default appReducer;