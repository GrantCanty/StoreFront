export interface ShopDetails {
    category: string;
    gender: string;

}

export interface MapDetails {
    url: string;
    filters: ShopDetails;
    //products: Map<string, string[]>;
    products : Map<string, Map<string, ShopDetails>>
}