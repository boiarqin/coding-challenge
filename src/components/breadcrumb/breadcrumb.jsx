import React from 'react';

import './breadcrumb.css';

const Breadcrumb = (props) => {
    return (
        <span className="breadcrumb">
            <a className="city" href={props.parameters.cityLink}>
                {props.parameters.city}
            </a>
            <span className="caret">
                &gt;
            </span>
            <span className="near">
                {props.parameters.near}
            </span>
        </span>
    );
};

export default Breadcrumb;