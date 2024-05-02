package routes

import (
	"net/http"
	"os"
	"strings"

	"github.com/gorilla/mux"
)

func ServeImage(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	if !strings.HasSuffix(vars["file"], ".webp") {
		http.Error(w, "No file found", http.StatusNotFound)
		return
	}

	//gets current working directory
	dir, err := os.Getwd()
	if err != nil {
		http.Error(w, "Directory not found", http.StatusUnprocessableEntity)
		return
	}

	file, err := os.ReadFile(dir + "/image/" + vars["file"])

	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}

	w.Header().Set("Content-type", "image/webp")
	w.Write(file)
}
