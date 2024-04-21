export interface ShopDetails {
    category: string;
    gender: string;

}

export interface MapDetails {
    url: string;
    filters: ShopDetails;
    products : Map<string, Map<string, ShopDetails>>
}

export interface MD {
    [key: string] : MapDetails
}

export interface Cats {
    [key: string] : ShopDetails
}
