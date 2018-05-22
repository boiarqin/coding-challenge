import * as React from 'react';
import { Dispatch } from 'redux';
import { IAppState, ISpot } from '../../types';

import './searchResultsItem.css';

interface ISearchResultsItemProps {
    data: ISpot;
    detailsClickHandler: () => Dispatch<IAppState>;
    isSelected: boolean;
}

const SearchResultsItem = (props: ISearchResultsItemProps) => {
    return (
        <div className={"search-results-item " + (props.isSelected ? "selected" : "") }>
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
                <button
                    className="details-button"
                    onClick={props.detailsClickHandler}
                >
                    Details
                </button>
            </div>
        </div>
    );
}

export default SearchResultsItem;