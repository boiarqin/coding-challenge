export interface ISpot {
    title: string;
    price: number;
    description: string;
    distance: string;
    image_url: string;
};

export interface ISearchParameters {
    city: string;
    cityLink: string;
    near: string;
};

export interface IAppState {
    loading: boolean;
    spotDetailsModalOpen: boolean;
    searchParameters: ISearchParameters;
    selectedSearchResultIndex: number | null;
    searchResults: ISpot[];
};