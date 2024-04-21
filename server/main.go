package main

import (
	"log"
	"net/http"

	"github.com/GrantCanty/storefront/app_context"
	"github.com/GrantCanty/storefront/routes"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("content-type", "application/json;charset=UTF-8")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type,AccessToken,X-CSRF-Token, Authorization, Token")
		w.Header().Add("Access-Control-Allow-Credentials", "true")
		w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	/*hm := orderedmap.New[string, string]()
	hm.Set("test", "tet")
	hm.Set("aorta", "tet")*/

	ctx := app_context.NewAppContext()
	r := mux.NewRouter()
	r.Use(corsMiddleware)

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
	})
	handler := c.Handler(r)

	r.HandleFunc("/", routes.Home(&ctx)).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", handler))
}
