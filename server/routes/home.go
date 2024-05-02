package routes

import (
	"encoding/json"
	"net/http"

	"github.com/GrantCanty/storefront/app_context"
	//"github.com/GrantCanty/storefront/types"
	//orderedmap "github.com/wk8/go-ordered-map/v2"
)

func Home(ac *app_context.AppContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-type", "application/json")

		if true {
			json.NewEncoder(w).Encode(ac.HomeInfo)
			return
		}

		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	}
}
