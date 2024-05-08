package app_context

import "github.com/GrantCanty/storefront/types"

// add gender and category fields to each item
func (appCtx *AppContext) initItemList() {
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/amour2.webp",
		HoverUrl:  "http://localhost:8080/image/amour0.webp",
		ItemName:  "Amour Shirt",
		ItemPrice: 130,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Loose",
		Details:   types.ShopDetails{Gender: types.U, Category: types.TOP},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/antoine2.webp",
		HoverUrl:  "http://localhost:8080/image/antoine0.webp",
		ItemName:  "Antoine Shirt",
		ItemPrice: 155,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Loose",
		Details:   types.ShopDetails{Gender: types.M, Category: types.TOP},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/kenny2.webp",
		HoverUrl:  "http://localhost:8080/image/kenny0.webp",
		ItemName:  "Kenny Shirt",
		ItemPrice: 130,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.TOP},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/raymondwhite2.webp",
		HoverUrl:  "http://localhost:8080/image/raymondwhite0.webp",
		ItemName:  "Raymond Shirt",
		ItemPrice: 150,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.TOP},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/leo2.webp",
		HoverUrl:  "http://localhost:8080/image/leo0.webp",
		ItemName:  "Leo Shirt",
		ItemPrice: 130,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.TOP},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/louis2.webp",
		HoverUrl:  "http://localhost:8080/image/louis0.jpg",
		ItemName:  "Louis Shirt",
		ItemPrice: 145,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Loose",
		Details:   types.ShopDetails{Gender: types.M, Category: types.TOP},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/raymondorange2.webp",
		HoverUrl:  "http://localhost:8080/image/raymondorange0.webp",
		ItemName:  "Raymond Shirt",
		ItemPrice: 150,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.TOP},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/andregrey2.webp",
		HoverUrl:  "http://localhost:8080/image/andregrey0.webp",
		ItemName:  "Andre Sweater",
		ItemPrice: 245,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.KNIT},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/charlesneon2.webp",
		HoverUrl:  "http://localhost:8080/image/charlesneon0.webp",
		ItemName:  "Charles Sweater",
		ItemPrice: 260,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.KNIT},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/valentin2.jpg",
		HoverUrl:  "http://localhost:8080/image/valentin0.jpg",
		ItemName:  "Valentin Sweater",
		ItemPrice: 240,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.KNIT},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/charleswine2.webp",
		HoverUrl:  "http://localhost:8080/image/charleswine0.webp",
		ItemName:  "Charles Sweater",
		ItemPrice: 260,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.KNIT},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/renneswhite2.webp",
		HoverUrl:  "http://localhost:8080/image/renneswhite0.webp",
		ItemName:  "Rennes Sweater",
		ItemPrice: 330,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Loose",
		Details:   types.ShopDetails{Gender: types.M, Category: types.KNIT},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/andreivory2.webp",
		HoverUrl:  "http://localhost:8080/image/andreivory0.webp",
		ItemName:  "Andre Sweater",
		ItemPrice: 245,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.KNIT},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/rennesyellow2.webp",
		HoverUrl:  "http://localhost:8080/image/rennesyellow0.webp",
		ItemName:  "Rennes Sweater",
		ItemPrice: 330,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Loose",
		Details:   types.ShopDetails{Gender: types.M, Category: types.KNIT},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/sunset2.webp",
		HoverUrl:  "http://localhost:8080/image/sunset0.webp",
		ItemName:  "Sunset Sweater",
		ItemPrice: 270,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.KNIT},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/martinindigo2.webp",
		HoverUrl:  "http://localhost:8080/image/martinindigo0.webp",
		ItemName:  "Martin Jeans",
		ItemPrice: 250,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Straight Cut",
		Details:   types.ShopDetails{Gender: types.U, Category: types.JEAN},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/martincream2.webp",
		HoverUrl:  "http://localhost:8080/image/martincream0.webp",
		ItemName:  "Martin Jeans",
		ItemPrice: 250,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Straight Cut",
		Details:   types.ShopDetails{Gender: types.U, Category: types.JEAN},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/martinnoir2.webp",
		HoverUrl:  "http://localhost:8080/image/martinnoir0.webp",
		ItemName:  "Raymond Shirt",
		ItemPrice: 250,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Straight Cut",
		Details:   types.ShopDetails{Gender: types.U, Category: types.JEAN},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/terrynavy2.webp",
		HoverUrl:  "http://localhost:8080/image/terrynavy0.webp",
		ItemName:  "Terry Sweatshirt",
		ItemPrice: 190,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.U, Category: types.SWEAT},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/james2.webp",
		HoverUrl:  "http://localhost:8080/image/james0.webp",
		ItemName:  "James Sweatshirt",
		ItemPrice: 220,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.M, Category: types.SWEAT},
	})
	appCtx.ItemList = append(appCtx.ItemList, types.ItemListing{
		Url:       "http://localhost:8080/image/terryblue2.webp",
		HoverUrl:  "http://localhost:8080/image/terryblue0.webp",
		ItemName:  "Terry Sweatshirt",
		ItemPrice: 190,
		ItemID:    appCtx.Counter.Add(),
		Fit:       "Regular",
		Details:   types.ShopDetails{Gender: types.U, Category: types.SWEAT},
	})

}
