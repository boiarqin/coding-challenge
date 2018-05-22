import * as React from 'react';
import { ISearchParameters } from '../../types';

import './breadcrumb.css';


const Breadcrumb = (props: ISearchParameters) => {
    return (
        <span className="breadcrumb">
            <a className="city" href={props.cityLink}>
                {props.city}
            </a>
            <span className="caret">
                &gt;
            </span>
            <span className="near">
                {props.near}
            </span>
        </span>
    );
};

export default Breadcrumb;