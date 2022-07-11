package service

import (
	"context"
	"log"

	"github.com/Rviewer-Challenges/4TOWna2EWttcHFagNbUw/api/internal/models"
	"github.com/Rviewer-Challenges/4TOWna2EWttcHFagNbUw/api/internal/storage"
)

type Feed struct {
	News *storage.Storage
}

func New(storage *storage.Storage) *Feed {
	return &Feed{
		News: storage,
	}
}

func (feed *Feed) GetNews(ctx context.Context) ([]models.Notice, error) {
	notices := []models.Notice{}

	if err := feed.News.GetNewsESPN(&notices); err != nil {
		log.Fatal("error getting espn news", err)
		return nil, err
	}

	if err := feed.News.GetNewsDiarioAS(&notices); err != nil {
		log.Fatal("error getting diarioAS news", err)
		return nil, err
	}

	if err := feed.News.GetNewsMarca(&notices); err != nil {
		log.Fatal("error getting marca news", err)
		return nil, err
	}

	if err := feed.News.GetNewsNYTimes(&notices); err != nil {
		log.Fatal("error getting NYTimes news", err)
		return nil, err
	}

	if err := feed.News.GetNewsFoxSports(&notices); err != nil {
		log.Fatal("error getting fox sports news", err)
		return nil, err
	}

	if err := feed.News.GetNewsYahoo(&notices); err != nil {
		log.Fatal("error getting yahoo sports news", err)
		return nil, err
	}

	if err := feed.News.GetNews101GreatGoals(&notices); err != nil {
		log.Fatal("error getting 101 great goals news", err)
		return nil, err
	}

	if err := feed.News.Get90Min(&notices); err != nil {
		log.Fatal("error getting 90 min news", err)
		return nil, err
	}

	return notices, nil
}
