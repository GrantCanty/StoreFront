export interface ShopDetails {
    category: string;
    gender: string;

}

export interface MapDetails {
    url: string;
    filters: ShopDetails;
    products : Map<string, Map<string, ShopDetails>>
}

class MappDetails {
    url: string;
    filters: ShopDetails;
    products: Map<string, Map<string, ShopDetails>>

    constructor(url: string, filters: ShopDetails, products: Map<string, Map<string, ShopDetails>>) {
        this.url = url
        this.filters = filters
        this.products = products
    }
}
