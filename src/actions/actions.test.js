import {
    FETCH_SEARCH_RESULTS,
    FETCH_SEARCH_RESULTS_ERROR,
    UPDATE_SEARCH_RESULTS,
    OPEN_DETAILS_MODAL,
    CLOSE_DETAILS_MODAL,
    fetchSearchResults,
    fetchSearchResultsError,
    updateSearchResults,
    openDetailsModal,
    closeDetailsModal
} from './index';

describe('action creators', () => {
    it('should create action for fetching search results', () => {
        const expectedAction = {
            type: FETCH_SEARCH_RESULTS,
        };
        expect(fetchSearchResults()).toEqual(expectedAction)
    });

    it('should create action when there is an error fetching search results', () => {
        const expectedAction = {
            type: FETCH_SEARCH_RESULTS_ERROR,
        };
        expect(fetchSearchResultsError()).toEqual(expectedAction)
    });

    it('should create action when updating search results with data', () => {
        const data = [{
            "title":"124 S Wabash Ave. - Garage",
            "price":1500,
            "description":"Enter this location at 124 S Wabash Ave. This is the Palmer House garage operated by ABM Parking. It is located on the west/right-hand side of S Wabash Ave St (a one-way street) between E Monroe St and E Adams St. It is just past the Corner Bakery and just before the main entrance of the Palmer House. Please note: The address 124 S. Wabash is for GPS purposes, this address will not be displayed above the garage entrance, look for a black and gold sign stating \"Parking\" in white print.",
            "distance":"0.1 mi",
            "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_2304,y_1536/v1412377222/msvt2qdusildhvgopsl3.jpg"
         },
         {
            "title":"210 S Wabash Ave. - Adams & Wabash Garage",
            "price":1400,
            "description":"Enter this location at 210 S Wabash Ave.  This is the Adams and Wabash garage operated by InterPark. It is located on the west/right-hand side of S Wabash Ave. (a one-way street) between E Adams St. and E Jackson Blvd. You may also enter this location at its other entrance, 17 E Adams St.",
            "distance":"0.2 mi",
            "image_url":"https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_374,y_247/v1425512904/bhwlpxwcmvkigrn1xmbm.png"
         },];
        const expectedAction = {
            data,
            type: UPDATE_SEARCH_RESULTS,
        };
        expect(updateSearchResults(data)).toEqual(expectedAction)
    });

    it('should create action when opening the spot detail modal', () => {
        const selectedSearchResultIndex = 1;
        const expectedAction = {
            selectedSearchResultIndex,
            type: OPEN_DETAILS_MODAL,
        };
        expect(openDetailsModal(selectedSearchResultIndex)).toEqual(expectedAction)
    });

    it('should create action when closing the spot detail modal', () => {
        const expectedAction = {
            type: CLOSE_DETAILS_MODAL,
        };
        expect(closeDetailsModal()).toEqual(expectedAction)
    });
})