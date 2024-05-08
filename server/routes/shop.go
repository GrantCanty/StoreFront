package routes

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/GrantCanty/storefront/app_context"
	"github.com/GrantCanty/storefront/types"
)

func Shop(ac *app_context.AppContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		b, err := io.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Could not read body", http.StatusBadRequest)
			return
		}

		var body types.ShopDetails
		err = json.Unmarshal(b, &body)
		if err != nil {
			http.Error(w, "Could not unmarshal body", http.StatusBadRequest)
		}

		var res []types.ItemListing
		for i := range ac.ItemList {
			if body.Category == types.ALL && body.Gender == types.U {
				res = ac.ItemList
				break
			} else if body.Category == types.ALL && body.Gender != types.U {
				if body.Gender == ac.ItemList[i].Details.Gender {
					res = append(res, ac.ItemList[i])
				}
			} else if body.Category != types.ALL && body.Gender == types.U {
				if body.Category == ac.ItemList[i].Details.Category {
					res = append(res, ac.ItemList[i])
				}
			} else {
				//add logic for filter through All Clothes and All Accessories

				if body.Category == ac.ItemList[i].Details.Category && (body.Gender == ac.ItemList[i].Details.Gender || ac.ItemList[i].Details.Gender == types.U) {
					res = append(res, ac.ItemList[i])
				}
			}
		}

		w.Header().Set("Content-type", "application/json")

		if true {
			json.NewEncoder(w).Encode(res)
			return
		}

		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	}
}
