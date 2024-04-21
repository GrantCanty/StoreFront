package routes

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/GrantCanty/storefront/app_context"
	"github.com/GrantCanty/storefront/types"
)

func Home(ac *app_context.AppContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("home root requested")
		w.Header().Set("Content-type", "application/json")

		data := types.Home{}
		data["New Arrivals"] = types.HomeDetails{
			Url:     "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			Filters: types.ShopDetails{Gender: types.U, Category: types.NA},
			Products: map[string]map[string]types.ShopDetails{
				"Women": {
					"Winter Collection": {Gender: types.W, Category: types.NA},
					"Accessories":       {Gender: types.W, Category: types.ALLACC},
					"Gifts":             {Gender: types.W, Category: types.GIFT},
				},
				"Men": {
					"Winter Collection": {Gender: types.M, Category: types.NA},
					"Accessories":       {Gender: types.M, Category: types.ALLACC},
					"Gifts":             {Gender: types.M, Category: types.GIFT},
				},
			},
		}
		data["Women"] = types.HomeDetails{
			Url:     "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			Filters: types.ShopDetails{Gender: types.W, Category: types.ALL},
			Products: map[string]map[string]types.ShopDetails{
				"Clothes": {
					"Dresses":     {Gender: types.W, Category: types.DRESSES},
					"Coats":       {Gender: types.W, Category: types.COATS},
					"Knitwear":    {Gender: types.W, Category: types.KNIT},
					"Sweatshirts": {Gender: types.W, Category: types.SWEAT},
					"Jackets":     {Gender: types.W, Category: types.JACKET},
					"Tops":        {Gender: types.W, Category: types.TOP},
					"Bottoms":     {Gender: types.W, Category: types.BOTTOM},
					"Jeans":       {Gender: types.W, Category: types.JEAN},
					"Skirts":      {Gender: types.W, Category: types.SKIRT},
					"All Clothes": {Gender: types.W, Category: types.ALLCLO},
				},
				"Accessories": {
					"Jewlery":         {Gender: types.W, Category: types.JEWLERY},
					"Shoes":           {Gender: types.W, Category: types.SHOES},
					"Hats":            {Gender: types.W, Category: types.HATS},
					"Bags":            {Gender: types.W, Category: types.BAGS},
					"Leather":         {Gender: types.W, Category: types.LEATHER},
					"Scarves":         {Gender: types.W, Category: types.SCARVES},
					"All Accessories": {Gender: types.W, Category: types.ALLACC},
				},
			},
		}

		if true {
			json.NewEncoder(w).Encode(data)
			return
		}

		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	}
}
