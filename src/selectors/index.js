export const getSelectedSpot = (state) => {
    if (state.searchResults.length > 0 && state.selectedSearchResultIndex){
        return state.searchResults[state.selectedSearchResultIndex];
    } else {
        return null;
    }
};
