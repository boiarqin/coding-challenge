import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from './breadcrumb';

it('renders without crashing', () => {
    const parameters = {
        city: 'Washington D.C.',
        cityLink: 'washingtondc',
        near: 'Lincoln Memorial'
    }
    shallow(<Breadcrumb
        city={parameters.city}
        cityLink={parameters.cityLink}
        near={parameters.near}
    />);
});