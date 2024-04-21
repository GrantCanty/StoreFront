package routes

import (
	"encoding/json"
	"net/http"

	"github.com/GrantCanty/storefront/app_context"
	"github.com/GrantCanty/storefront/types"
	orderedmap "github.com/wk8/go-ordered-map/v2"
)

func Home(ac *app_context.AppContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-type", "application/json")

		data := orderedmap.New[string, types.HomeDetails]()
		prods := orderedmap.New[string, *orderedmap.OrderedMap[string, types.ShopDetails]]()
		shopd := orderedmap.New[string, types.ShopDetails]()
		
		// new arrivals
		shopd.Set("Winter Collection",types.ShopDetails{Gender: types.W, Category: types.NA})
		shopd.Set("Accessories",types.ShopDetails{Gender: types.W, Category: types.ALLACC})
		shopd.Set("Gifts",types.ShopDetails{Gender: types.W, Category: types.GIFT})
		prods.Set("Women", shopd)

		shopd = orderedmap.New[string, types.ShopDetails]()

		shopd.Set("Winter Collection",types.ShopDetails{Gender: types.M, Category: types.NA})
		shopd.Set("Accessories",types.ShopDetails{Gender: types.M, Category: types.ALLACC})
		shopd.Set("Gifts",types.ShopDetails{Gender: types.M, Category: types.GIFT})
		prods.Set("Men", shopd)
		data.Set("New Arrivals", types.HomeDetails{
			Url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			Filters: types.ShopDetails{Category:"asd", Gender: "sdf" },
			Products: prods,
		})

		//womens
		prods = orderedmap.New[string, *orderedmap.OrderedMap[string, types.ShopDetails]]()
		shopd = orderedmap.New[string, types.ShopDetails]()

		shopd.Set("Dresses", types.ShopDetails{Gender: types.W, Category: types.DRESSES})
		shopd.Set("Coats", types.ShopDetails{Gender: types.W, Category: types.COATS})
		shopd.Set("Knitwear", types.ShopDetails{Gender: types.W, Category: types.KNIT})
		shopd.Set("Sweatshirts", types.ShopDetails{Gender: types.W, Category: types.SWEAT})
		shopd.Set("Jackets", types.ShopDetails{Gender: types.W, Category: types.JACKET})
		shopd.Set("Tops", types.ShopDetails{Gender: types.W, Category: types.TOP})
		shopd.Set("Bottoms", types.ShopDetails{Gender: types.W, Category: types.BOTTOM})
		shopd.Set("Jeans", types.ShopDetails{Gender: types.W, Category: types.JEAN})
		shopd.Set("Skirts", types.ShopDetails{Gender: types.W, Category: types.SKIRT})
		shopd.Set("All Clothes", types.ShopDetails{Gender: types.W, Category: types.ALLCLO})
		prods.Set("Clothes", shopd)

		shopd = orderedmap.New[string, types.ShopDetails]()

		shopd.Set("Jewlery", types.ShopDetails{Gender: types.W, Category: types.JEWLERY})
		shopd.Set("Shoes", types.ShopDetails{Gender: types.W, Category: types.SHOES})
		shopd.Set("Hats", types.ShopDetails{Gender: types.W, Category: types.HATS})
		shopd.Set("Bags", types.ShopDetails{Gender: types.W, Category: types.BAGS})
		shopd.Set("Leather", types.ShopDetails{Gender: types.W, Category: types.LEATHER})
		shopd.Set("Scarves", types.ShopDetails{Gender: types.W, Category: types.SCARVES})
		shopd.Set("All Accessories", types.ShopDetails{Gender: types.W, Category: types.ALLACC})
		prods.Set("Accessories", shopd)

		data.Set("Women", types.HomeDetails{
			Url: "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			Filters: types.ShopDetails{Gender: types.W, Category: types.ALL},
			Products: prods,
		})

		//men
		prods = orderedmap.New[string, *orderedmap.OrderedMap[string, types.ShopDetails]]()
		shopd = orderedmap.New[string, types.ShopDetails]()

		shopd.Set("Suits", types.ShopDetails{Gender: types.M, Category: types.SUIT})
		shopd.Set("Coats", types.ShopDetails{Gender: types.M, Category: types.COATS})
		shopd.Set("Knitwear", types.ShopDetails{Gender: types.M, Category: types.KNIT})
		shopd.Set("Sweatshirts", types.ShopDetails{Gender: types.M, Category: types.SWEAT})
		shopd.Set("Jackets", types.ShopDetails{Gender: types.M, Category: types.JACKET})
		shopd.Set("Tops", types.ShopDetails{Gender: types.M, Category: types.TOP})
		shopd.Set("Bottoms", types.ShopDetails{Gender: types.M, Category: types.BOTTOM})
		shopd.Set("Suits", types.ShopDetails{Gender: types.M, Category: types.JEAN})
		shopd.Set("All Clothes", types.ShopDetails{Gender: types.M, Category: types.ALLCLO})
		prods.Set("Clothes", shopd)

		shopd = orderedmap.New[string, types.ShopDetails]()

		shopd.Set("Jewlery", types.ShopDetails{Gender: types.M, Category: types.JEWLERY})
		shopd.Set("Shoes", types.ShopDetails{Gender: types.M, Category: types.SHOES})
		shopd.Set("Hats", types.ShopDetails{Gender: types.M, Category: types.HATS})
		shopd.Set("Bags", types.ShopDetails{Gender: types.M, Category: types.BAGS})
		shopd.Set("Leather", types.ShopDetails{Gender: types.M, Category: types.LEATHER})
		shopd.Set("Scarves", types.ShopDetails{Gender: types.M, Category: types.SCARVES})
		shopd.Set("All Accessories", types.ShopDetails{Gender: types.M, Category: types.ALLACC})
		prods.Set("Accessories", shopd)

		data.Set("Men", types.HomeDetails{
			Url:     "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			Filters: types.ShopDetails{Gender: types.M, Category: types.ALL},
			Products: prods,
		})

		// denim
		prods = orderedmap.New[string, *orderedmap.OrderedMap[string, types.ShopDetails]]()
		shopd = orderedmap.New[string, types.ShopDetails]()

		shopd.Set("Men's Denim", types.ShopDetails{Gender: types.M, Category: types.JEAN})
		shopd.Set("Women's Denim", types.ShopDetails{Gender: types.W, Category: types.JEAN})
		prods.Set("Products", shopd)

		data.Set("Denim", types.HomeDetails{
			Url:     "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			Filters: types.ShopDetails{Gender: types.U, Category: types.JEAN},
			Products: prods,
		})

		//accessories
		prods = orderedmap.New[string, *orderedmap.OrderedMap[string, types.ShopDetails]]()
		shopd = orderedmap.New[string, types.ShopDetails]()

		shopd.Set("Jewlery", types.ShopDetails{Gender: types.W, Category: types.JEWLERY})
		shopd.Set("Shoes", types.ShopDetails{Gender: types.W, Category: types.SHOES})
		shopd.Set("Hats", types.ShopDetails{Gender: types.W, Category: types.HATS})
		shopd.Set("Bags", types.ShopDetails{Gender: types.W, Category: types.BAGS})
		shopd.Set("Leather", types.ShopDetails{Gender: types.W, Category: types.LEATHER})
		shopd.Set("Scarves", types.ShopDetails{Gender: types.W, Category: types.SCARVES})
		shopd.Set("All Accessories", types.ShopDetails{Gender: types.W, Category: types.ALLACC})
		prods.Set("Women", shopd)
		
		shopd = orderedmap.New[string, types.ShopDetails]()

		shopd.Set("Jewlery", types.ShopDetails{Gender: types.M, Category: types.JEWLERY})
		shopd.Set("Shoes", types.ShopDetails{Gender: types.M, Category: types.SHOES})
		shopd.Set("Hats", types.ShopDetails{Gender: types.M, Category: types.HATS})
		shopd.Set("Bags", types.ShopDetails{Gender: types.M, Category: types.BAGS})
		shopd.Set("Leather", types.ShopDetails{Gender: types.M, Category: types.LEATHER})
		shopd.Set("Scarves", types.ShopDetails{Gender: types.M, Category: types.SCARVES})
		shopd.Set("All Accessories", types.ShopDetails{Gender: types.M, Category: types.ALLACC})
		prods.Set("Women", shopd)

		data.Set("Accessories", types.HomeDetails{
			Url:     "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			Filters: types.ShopDetails{Gender: types.U, Category: types.ALLACC},
			Products: prods,
		})

		//eau de toilette
		prods = orderedmap.New[string, *orderedmap.OrderedMap[string, types.ShopDetails]]()
		shopd = orderedmap.New[string, types.ShopDetails]()

		shopd.Set("Fragrence", types.ShopDetails{Gender: types.W, Category: types.FRAGRENCE})
		prods.Set("Women", shopd)

		shopd = orderedmap.New[string, types.ShopDetails]()

		shopd.Set("Fragrence", types.ShopDetails{Gender: types.M, Category: types.FRAGRENCE})
		prods.Set("Men", shopd)

		data.Set("Eau de Toilette", types.HomeDetails{
			Url:     "https://images.unsplash.com/photo-1663869960499-6866301c0259?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			Filters: types.ShopDetails{Gender: types.U, Category: types.FRAGRENCE},
			Products: prods,
		})

		if true {
			json.NewEncoder(w).Encode(data)
			return
		}

		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	}
}
