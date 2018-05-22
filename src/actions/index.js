import { makeSearchResultsRequest } from '../services';
// ACTIONS
export const FETCH_SEARCH_RESULTS_ERROR = 'FETCH_SEARCH_RESULTS_ERROR';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
export const OPEN_DETAILS_MODAL = 'OPEN_DETAILS_MODAL';
export const CLOSE_DETAILS_MODAL = 'CLOSE_DETAILS_MODAL';

export const loadSearchResults = () => {
    return (dispatch) => {
        return makeSearchResultsRequest().then(
            data => dispatch(updateSearchResults(data)),
            error => dispatch(fetchSearchResultsError())
        )
    }
};

export const fetchSearchResultsError = () => {
    return {
        type: FETCH_SEARCH_RESULTS_ERROR,
    };
};

export const updateSearchResults = (data) => {
    return {
        type: UPDATE_SEARCH_RESULTS,
        data
    };
};

export const openDetailsModal = (selectedSearchResultIndex) => {
    return {
        type: OPEN_DETAILS_MODAL,
        selectedSearchResultIndex
    };
};

export const closeDetailsModal = () => {
    return {
        type: CLOSE_DETAILS_MODAL
    };
};