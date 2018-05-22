export const getSelectedSpot = (state) => {
    const indexIsNumber = state.selectedSearchResultIndex !== null;
    if (state.searchResults.length > 0 && indexIsNumber){
        return state.searchResults[state.selectedSearchResultIndex];
    } else {
        return null;
    }
};
