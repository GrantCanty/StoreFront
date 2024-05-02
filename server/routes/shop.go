package routes

import (
	"encoding/json"
	"net/http"

	"github.com/GrantCanty/storefront/app_context"
)

func Shop(ac *app_context.AppContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-type", "application/json")

		if true {
			json.NewEncoder(w).Encode(ac.ItemList)
			return
		}

		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	}
}
