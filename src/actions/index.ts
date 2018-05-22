import { Dispatch } from 'react-redux';
import { makeSearchResultsRequest } from '../services';
import { ISpot } from '../types';
// ACTIONS
export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const FETCH_SEARCH_RESULTS_ERROR = 'FETCH_SEARCH_RESULTS_ERROR';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
export const OPEN_DETAILS_MODAL = 'OPEN_DETAILS_MODAL';
export const CLOSE_DETAILS_MODAL = 'CLOSE_DETAILS_MODAL';

export const loadSearchResults = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchSearchResults());
        return makeSearchResultsRequest().then(
            (data: ISpot[]) => dispatch(updateSearchResults(data)),
            (error: any) => dispatch(fetchSearchResultsError())
        )
    }
};

export const fetchSearchResults = () => {
    return {
        type: FETCH_SEARCH_RESULTS,
    };
};

export const fetchSearchResultsError = () => {
    return {
        type: FETCH_SEARCH_RESULTS_ERROR,
    };
};

export const updateSearchResults = (data: ISpot[]) => {
    return {
        data,
        type: UPDATE_SEARCH_RESULTS
    };
};

export const openDetailsModal = (selectedSearchResultIndex: number) => {
    return {
        selectedSearchResultIndex,
        type: OPEN_DETAILS_MODAL
    };
};

export const closeDetailsModal = () => {
    return {
        type: CLOSE_DETAILS_MODAL
    };
};