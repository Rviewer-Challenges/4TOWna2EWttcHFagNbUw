package storage

import "github.com/Rviewer-Challenges/4TOWna2EWttcHFagNbUw/api/internal/models"

type ID int64

const (
	ESPN_ID ID = (iota+1)
	DIARIOAS_ID
	MARCA_ID
	NYTIMES_ID
	FOX_SPORTS_ID
	YAHOO_SPORTS_ID
	GREAT_GOALS_101_ID
	NINETY_MIN_ID
)

type Storage interface {
	GetNews(notices *[]models.Notice) error
}