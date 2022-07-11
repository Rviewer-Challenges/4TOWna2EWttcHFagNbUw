package main

import (
	"log"

	"github.com/Rviewer-Challenges/4TOWna2EWttcHFagNbUw/api/internal/models"
	"github.com/Rviewer-Challenges/4TOWna2EWttcHFagNbUw/api/internal/storage"
)

func main() {

	storage, err := storage.New()
	if err != nil {
		log.Panic("error ", err)
	}

	var notices []models.Notice

	storage.Get90Min(&notices)

}
