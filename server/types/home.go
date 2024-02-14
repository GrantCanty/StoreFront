package types

type Home map[string]HomeDetails

type HomeDetails struct {
	Url      string                            `json:"url"`
	Filters  ShopDetails                       `json:"filters"`
	Products map[string]map[string]ShopDetails `json:"products"`
}

type ShopDetails struct {
	Category string `json:"category"`
	Gender   string `json:"gender"`
}
