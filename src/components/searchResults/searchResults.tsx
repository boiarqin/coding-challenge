import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { openDetailsModal } from '../../actions';
import Breadcrumb from '../breadcrumb/breadcrumb';
import SearchResultsItem from '../searchResultsItem/searchResultsItem';

import { IAppState, ISearchParameters, ISpot } from '../../types';

import './searchResults.css'; 

interface ISearchResultsProps {
    dispatchOpenDetailsModal: (searchResultsIndex: number) => Dispatch<IAppState>,
    parameters: ISearchParameters,
    results: ISpot[],
    selectedSearchResultIndex: number | null
}

const mapStateToProps = (state: IAppState, ownProps: ISearchResultsProps) => ({
    ...ownProps,
    parameters: state.searchParameters,
    results: state.searchResults,
    selectedSearchResultIndex: state.selectedSearchResultIndex
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => ({
    dispatchOpenDetailsModal: (searchResultsIndex: number) => dispatch(openDetailsModal(searchResultsIndex))
});

export const SearchResults = (props: ISearchResultsProps) => {
    const resultsList = props.results.map((result, i) => {
        return (
        <SearchResultsItem
            key={i}
            data={result}
            isSelected={props.selectedSearchResultIndex === i}
            detailsClickHandler={() => props.dispatchOpenDetailsModal(i)}
        />
        );
    })
    return (
        <div className="search-results">
            <div className="search-results-header">
                <Breadcrumb
                    city={props.parameters.city}
                    cityLink={props.parameters.cityLink}
                    near={props.parameters.near}
                />
                <span className="results-near">
                    {props.parameters.near}
                </span>
                <span className="results-number">
                    {props.results.length} Spots Available
                </span>
            </div>
            <div className="search-results-body">
                {resultsList}
            </div>
        </div>
    );
}

export default connect<ISearchResultsProps>(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);