import React from 'react';

import './breadcrumb.css';

const Breadcrumb = (props) => {
    return (
        <span className="breadcrumb">
            <a className="city" href={props.parameters.cityLink}>
                {props.parameters.city}
            </a> &gt; {props.parameters.near}
        </span>
    );
};

export default Breadcrumb;