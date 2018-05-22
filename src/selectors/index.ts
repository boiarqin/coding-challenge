import { IAppState } from "../types";

export const getSelectedSpot = (state: IAppState) => {
    if (state.searchResults.length > 0
        && typeof state.selectedSearchResultIndex === "number"
        && state.selectedSearchResultIndex >= 0
        && state.selectedSearchResultIndex < state.searchResults.length
    ){
        return state.searchResults[state.selectedSearchResultIndex];
    } else {
        return null;
    }
};
