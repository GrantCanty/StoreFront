package app_context

import "github.com/GrantCanty/storefront/types"

func (appCtx *AppContext) initItemList() {
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/james_overshirt.webp",
		ItemName:  "James Overshirt",
		ItemPrice: 250,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Loose",
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/jimmy_pants.webp",
		ItemName:  "Jimmy Pants",
		ItemPrice: 275,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Loose",
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/kyle_shirt.webp",
		ItemName:  "Kyle Shirt",
		ItemPrice: 110,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/ribbed_vest.webp",
		ItemName:  "Ribbed Vest",
		ItemPrice: 255,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/merkel_shirt.webp",
		ItemName:  "Merkel Shirt",
		ItemPrice: 110,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Loose",
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/thomas_jacket.webp",
		ItemName:  "Thomas Jacket",
		ItemPrice: 350,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
	})
}
