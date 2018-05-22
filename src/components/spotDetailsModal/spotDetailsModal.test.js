import { mount, shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import SpotDetailsModal from './spotDetailsModal';

describe('SpotDetailsModal component tests', () => {
    it('renders without crashing', () => {
        const itemData = {
            "title":"Seven Lions - Valet",
            "price":1400,
            "description":"Arrive at this location at 97 E Adams St. This is the Seven Lions valet stand operated by VPA. It is located in front of Starbucks on the south side of E Adams St. between S Michigan Ave. and S Wabash Ave. If you are using the SpotHero Mobile App, please refer to the 2nd picture for an annotated map.",
            "distance":"0.1 mi",
            "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_1632,y_1224/v1433342744/anwchje8oi6zjldxb04q.jpg"
        };
        const closeModalMockFn = jest.fn();
        const isOpen = true;
        shallow(<SpotDetailsModal
            onRequestClose={closeModalMockFn}
            isOpen={isOpen}
            spot={itemData}
        />);
    });

    it('calls onRequestClose when the close button is clicked', () => {
        const itemData = {
            "title":"Seven Lions - Valet",
            "price":1400,
            "description":"Arrive at this location at 97 E Adams St. This is the Seven Lions valet stand operated by VPA. It is located in front of Starbucks on the south side of E Adams St. between S Michigan Ave. and S Wabash Ave. If you are using the SpotHero Mobile App, please refer to the 2nd picture for an annotated map.",
            "distance":"0.1 mi",
            "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_1632,y_1224/v1433342744/anwchje8oi6zjldxb04q.jpg"
        };
        const closeModalMockFn = jest.fn();
        const isOpen = true;
        const wrapper = shallow(<SpotDetailsModal
            onRequestClose={closeModalMockFn}
            isOpen={isOpen}
            spot={itemData}
        />);

        wrapper.find('button.close-button').simulate('click');
        expect(closeModalMockFn.mock.calls.length).toEqual(1);
    });

    it('calls onRequestClose when the overlay is clicked', () => {
        const itemData = {
            "title":"Seven Lions - Valet",
            "price":1400,
            "description":"Arrive at this location at 97 E Adams St. This is the Seven Lions valet stand operated by VPA. It is located in front of Starbucks on the south side of E Adams St. between S Michigan Ave. and S Wabash Ave. If you are using the SpotHero Mobile App, please refer to the 2nd picture for an annotated map.",
            "distance":"0.1 mi",
            "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_1632,y_1224/v1433342744/anwchje8oi6zjldxb04q.jpg"
        };
        const closeModalMockFn = jest.fn();
        const isOpen = true;
        const wrapper = mount(<SpotDetailsModal
            onRequestClose={closeModalMockFn}
            isOpen={isOpen}
            spot={itemData}
        />);

        wrapper.find('.spot-details-modal-overlay').simulate('click');
        expect(closeModalMockFn.mock.calls.length).toEqual(1);
    });
});