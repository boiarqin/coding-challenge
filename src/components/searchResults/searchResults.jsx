import React from 'react';
import { connect } from 'react-redux';
import Breadcrumb from '../breadcrumb/breadcrumb';
import SearchResultsItem from '../searchResultsItem/searchResultsItem';

import './searchResults.css'; 

const mapStateToProps = (state) => ({
    results: state.searchResults,
    parameters: state.searchParameters
});

const mapDispatchToProps = (dispatch) => ({

});

const SearchResults = (props) => {
    const resultsList = props.results.map((result, i) => {
        return (
        <SearchResultsItem
            key={i}
            data={result}
        />
        );
    })
    return (
        <div className="search-results">
            <div className="search-results-header">
                <Breadcrumb parameters={props.parameters}/>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);