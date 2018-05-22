import React from 'react';

import './searchResultsItem.css';

const SearchResultsItem = (props) => {
    return (
        <div className="search-results-item">
            <div className="item-left">
                <img
                    className="item-image"
                    src={props.data.image_url}
                    alt={props.data.title}
                />
            </div>
            <div className="item-right">
                <span className="title">{props.data.title}</span>
                <span className="distance">{props.data.distance}</span>
                <button className="details-button">Details</button>
            </div>
        </div>
    );
}

export default SearchResultsItem;