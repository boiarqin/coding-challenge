import { initialAppState } from '../reducers';
import { getSelectedSpot } from './index';

describe('getSelectedSpot selector', () => {
    it('returns null if no search result is selected and search results is empty', () => {
        const state = initialAppState();
        expect(getSelectedSpot(state)).toEqual(null);
    });

    it('returns null if no search result is selected', () => {
        const state = initialAppState();
        state.searchResults = [
            {
               "title":"Seven Lions - Valet",
               "price":1400,
               "description":"Arrive at this location at 97 E Adams St. This is the Seven Lions valet stand operated by VPA. It is located in front of Starbucks on the south side of E Adams St. between S Michigan Ave. and S Wabash Ave. If you are using the SpotHero Mobile App, please refer to the 2nd picture for an annotated map.",
               "distance":"0.1 mi",
               "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_1632,y_1224/v1433342744/anwchje8oi6zjldxb04q.jpg"
            },
            {
               "title":"55 E Monroe St. - Garage",
               "price":1600,
               "description":"Enter this location at 55 E Monroe St. This is the Park Monroe garage, operated by SP+. It is located on the south/right-hand side of E Monroe St. (a one-way street) between S Wabash Ave. and S Michigan Ave. You may also enter this location at its other entrance, 50 E Adams, between S Michigan Ave and S Wabash Ave.",
               "distance":"390 ft",
               "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_2571,y_1502/v1412374303/iy9iobjbtmrix01hp2yw.jpg"
            }
        ];
        expect(getSelectedSpot(state)).toEqual(null);
    });

    it('returns null if search results list is emtpy', () => {
        const state = initialAppState();
        state.selectedSearchResultIndex = 1;
        expect(getSelectedSpot(state)).toEqual(null);
    });

    it('returns the correct item if search results list and index exist', () => {
        const state = initialAppState();
        state.selectedSearchResultIndex = 1;
        state.searchResults = [
            {
               "title":"Seven Lions - Valet",
               "price":1400,
               "description":"Arrive at this location at 97 E Adams St. This is the Seven Lions valet stand operated by VPA. It is located in front of Starbucks on the south side of E Adams St. between S Michigan Ave. and S Wabash Ave. If you are using the SpotHero Mobile App, please refer to the 2nd picture for an annotated map.",
               "distance":"0.1 mi",
               "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_1632,y_1224/v1433342744/anwchje8oi6zjldxb04q.jpg"
            },
            {
               "title":"55 E Monroe St. - Garage",
               "price":1600,
               "description":"Enter this location at 55 E Monroe St. This is the Park Monroe garage, operated by SP+. It is located on the south/right-hand side of E Monroe St. (a one-way street) between S Wabash Ave. and S Michigan Ave. You may also enter this location at its other entrance, 50 E Adams, between S Michigan Ave and S Wabash Ave.",
               "distance":"390 ft",
               "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_2571,y_1502/v1412374303/iy9iobjbtmrix01hp2yw.jpg"
            }
        ];
        expect(getSelectedSpot(state)).toEqual(state.searchResults[1]);
    });
})