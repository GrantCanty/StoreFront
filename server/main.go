package main

import (
	"io/ioutil"
	"log"
	"net/http"
	"strings"

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
	appCtx := app_context.NewAppContext()
	r := mux.NewRouter()
	r.Use(corsMiddleware)

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
	})
	handler := c.Handler(r)

	r.HandleFunc("/", routes.Home(&appCtx)).Methods("GET")
	r.HandleFunc("/shop", routes.Shop(&appCtx)).Methods("POST")
	r.HandleFunc("/image/{file}", routes.ServeImage).Methods("GET")

	//r.HandleFunc("/image", sendImage)
	//r.PathPrefix("/image/").Handler(http.StripPrefix("/image/", http.FileServer(http.Dir("./image"))))

	log.Fatal(http.ListenAndServe(":8080", handler))
}

/*
func sendImage(w http.ResponseWriter, r *http.Request) {

}

	func getImage(payload *RequestBody) {
		fileContent, _ := io.ReadAll(payload.File)
		fileType := getFileType(payload.Format)
		fileName := getFileName(payload.FileName, payload.Format)
		options := bimg.Options{
			Quality: payload.Quality,
			Width:   payload.Width,
			Height:  payload.Height,
		}

}

	func getFileType(format string) bimg.ImageType {
		if format == "avif" {
			return bimg.AVIF
		} else {
			return bimg.WEBP
		}
	}

	func getFileName(originalFileName string, format string) string {
		splits := strings.Split(originalFileName, ".")
		splits[len(splits)-1] = format
		return strings.Join(splits, ".")
	}
*/
func ServeImage(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	if !strings.HasSuffix(vars["file"], ".webp") {
		http.Error(w, "No file found", http.StatusNotFound)
		return
	}

	file, err := ioutil.ReadFile("image/" + vars["file"])

	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}

	w.Header().Set("Content-type", "image/webp")
	w.Write(file)
}
