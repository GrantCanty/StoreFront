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

		//log.Printf("%+v\n", body)

		//loop through items and see which items meet the
		//product details. add them to a new itemListing array
		//and return the array

		w.Header().Set("Content-type", "application/json")

		if true {
			json.NewEncoder(w).Encode(ac.ItemList)
			return
		}

		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	}
}
