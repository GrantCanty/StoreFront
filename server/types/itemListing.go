package types

type ItemListing struct {
	Url       string  `json:"url"`
	ItemName  string  `json:"itemName"`
	ItemPrice float64 `json:"itemPrice"`
	ItemID    int     `json:"itemID"`
	Fit       string  `json:"fit"`
}
