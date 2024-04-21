package types

import orderedmap "github.com/wk8/go-ordered-map/v2"

type Home map[string]HomeDetails

type HomeDetails struct {
	Url      string                            `json:"url"`
	Filters  ShopDetails                       `json:"filters"`
	Products *orderedmap.OrderedMap[string, *orderedmap.OrderedMap[string, ShopDetails]] `json:"products"`
}

type ShopDetails struct {
	Category string `json:"category"`
	Gender   string `json:"gender"`
}

//var HM *orderedmap.OrderedMap[string, HomeDetails] = orderedmap.New[string, HomeDetails]()