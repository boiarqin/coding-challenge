import appReducer, { initialAppState } from './index';
import {
    FETCH_SEARCH_RESULTS,
    FETCH_SEARCH_RESULTS_ERROR,
    UPDATE_SEARCH_RESULTS,
    OPEN_DETAILS_MODAL,
    CLOSE_DETAILS_MODAL
} from '../actions';

describe('reducer case functions', () => {
    it('return initialAppState if no state provided', () => {
        const state = initialAppState();
        const action = {
            type: 'BLAHBLAHBLAH'
        }
        const newState = appReducer(undefined, action);
        expect(newState).toEqual(expect.objectContaining(state));
    });
    it('return same state if invalid action type', () => {
        const state = initialAppState();
        const action = {
            type: 'BLAHBLAHBLAH'
        }
        const newState = appReducer(state, action);
        expect(newState).toEqual(state);
    });
    it('when fetching search results changes loading boolean to true', () => {
        const state = initialAppState();
        const action = {
            type: FETCH_SEARCH_RESULTS
        }
        const newState = appReducer(state, action);
        expect(newState.loading).toEqual(true);
    });
    it('when done fetching search results changes loading boolean to false', () => {
        const state = initialAppState();
        const action = {
            type: UPDATE_SEARCH_RESULTS,
            data: []
        }
        const newState = appReducer(state, action);
        expect(newState.loading).toEqual(false);
    });
    it('error fetching search results changes loading boolean to false', () => {
        const state = initialAppState();
        const action = {
            type: FETCH_SEARCH_RESULTS_ERROR,
            data: []
        }
        const newState = appReducer(state, action);
        expect(newState.loading).toEqual(false);
    });
    it('updating search results correctly updates search results in store (empty array)', () => {
        const state = initialAppState();
        const action = {
            type: UPDATE_SEARCH_RESULTS,
            data: []
        }
        const newState = appReducer(state, action);
        
        expect(newState.searchResults).toEqual([]);
    });

    it('updating search results correctly updates search results in store', () => {
        const state = initialAppState();
        const action = {
            type: UPDATE_SEARCH_RESULTS,
            data: [
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
            ]
        }
        const newState = appReducer(state, action);
        expect(newState.searchResults).toEqual(expect.arrayContaining(
            [
                expect.objectContaining({
                   "title":"55 E Monroe St. - Garage",
                   "price":1600,
                   "description":"Enter this location at 55 E Monroe St. This is the Park Monroe garage, operated by SP+. It is located on the south/right-hand side of E Monroe St. (a one-way street) between S Wabash Ave. and S Michigan Ave. You may also enter this location at its other entrance, 50 E Adams, between S Michigan Ave and S Wabash Ave.",
                   "distance":"390 ft",
                   "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_2571,y_1502/v1412374303/iy9iobjbtmrix01hp2yw.jpg"
                }),
                expect.objectContaining({
                    "title":"Seven Lions - Valet",
                    "price":1400,
                    "description":"Arrive at this location at 97 E Adams St. This is the Seven Lions valet stand operated by VPA. It is located in front of Starbucks on the south side of E Adams St. between S Michigan Ave. and S Wabash Ave. If you are using the SpotHero Mobile App, please refer to the 2nd picture for an annotated map.",
                    "distance":"0.1 mi",
                    "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_1632,y_1224/v1433342744/anwchje8oi6zjldxb04q.jpg"
                })
            ]
        ));
    });

    it('when opening details modal, prevent setting undefined index and prevent opening modal', () => {
        const state = initialAppState();
        const action = {
            type: OPEN_DETAILS_MODAL
        }
        const newState = appReducer(state, action);
        
        expect(newState.selectedSearchResultIndex).toEqual(null);
        expect(newState.spotDetailsModalOpen).toEqual(false);
    });

    it('when opening details modal, prevent setting invalid index and prevent opening modal', () => {
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
        const action = {
            type: OPEN_DETAILS_MODAL,
            selectedSearchResultIndex: 3
        }
        const newState = appReducer(state, action);
        
        expect(newState.selectedSearchResultIndex).toEqual(null);
        expect(newState.spotDetailsModalOpen).toEqual(false);
    });

    it('when opening details modal, sets selected search result index and changes detailsModalOpen boolean to true', () => {
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
        const action = {
            type: OPEN_DETAILS_MODAL,
            selectedSearchResultIndex: 1
        }
        const newState = appReducer(state, action);
        
        expect(newState.selectedSearchResultIndex).toEqual(1);
        expect(newState.spotDetailsModalOpen).toEqual(true);
    });

    it('when closing details modal, resets selected search result index and changes detailsModalOpen boolean to false', () => {
        const state = initialAppState();
        state.spotDetailsModalOpen = true;
        const action = {
            type: CLOSE_DETAILS_MODAL
        }
        const newState = appReducer(state, action);
        
        expect(newState.selectedSearchResultIndex).toEqual(null);
        expect(newState.spotDetailsModalOpen).toEqual(false);
    })
})