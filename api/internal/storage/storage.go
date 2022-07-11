package storage

import (
	"github.com/Rviewer-Challenges/4TOWna2EWttcHFagNbUw/api/internal/models"
	"github.com/mmcdole/gofeed"
)

type Storage struct {
	espn          string
	diarioAS      string
	marca         string
	nyTimes       string
	foxSports     string
	yahooSports   string
	greatGoals101 string
	ninetyMin     string
}

func New() (*Storage, error) {
	storage := Storage{
		espn:          "https://www.espn.com/espn/rss/soccer/news",
		diarioAS:      "https://as.com/rss/futbol/mundial.xml",
		marca:         "https://e00-marca.uecdn.es/rss/futbol/futbol-internacional.xml",
		nyTimes:       "https://rss.nytimes.com/services/xml/rss/nyt/Soccer.xml",
		foxSports:     "https://api.foxsports.com/v2/content/optimized-rss?partnerKey=MB0Wehpmuj2lUhuRhQaafhBjAJqaPU244mlTDK1i&size=30&tags=fs/soccer,soccer/epl/league/1,soccer/mls/league/5,soccer/ucl/league/7,soccer/europa/league/8,soccer/wc/league/12,soccer/euro/league/13,soccer/wwc/league/14,soccer/nwsl/league/20,soccer/cwc/league/26,soccer/gold_cup/league/32,soccer/unl/league/67",
		yahooSports:   "https://sports.yahoo.com/soccer/rss/",
		greatGoals101: "https://www.101greatgoals.com/feed/",
		ninetyMin:     "https://www.90min.com/posts.rss",
	}

	return &storage, nil
}

func (storage *Storage) GetNewsESPN(notices *[]models.Notice) error {
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(storage.espn)

	for _, item := range feed.Items {

		var media string

		if len(item.Enclosures) > 0 {
			media = item.Enclosures[0].URL
		}

		notice := models.Notice{
			Title:           item.Title,
			Link:            item.Link,
			PublicationDate: item.Published,
			Author:          "ESPN",
			Description:     item.Description,
			Media:           media,
		}
		*notices = append(*notices, notice)
	}

	return nil
}

func (storage *Storage) GetNewsDiarioAS(notices *[]models.Notice) error {
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(storage.diarioAS)

	for _, item := range feed.Items {
		var author string

		if len(item.DublinCoreExt.Creator) > 0 {
			author = item.DublinCoreExt.Creator[0]
		}

		var categories []string
		categories = append(categories, item.Categories...)

		var media string
		if len(item.Enclosures) > 0 {
			media = item.Enclosures[1].URL
		}

		notice := models.Notice{
			Title:           item.Title,
			Link:            item.Link,
			Author:          author,
			Description:     item.Content,
			PublicationDate: item.Published,
			Categories:      categories,
			Media:           media,
		}

		*notices = append(*notices, notice)
	}
	return nil
}

func (storage *Storage) GetNewsMarca(notices *[]models.Notice) error {
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(storage.marca)

	for _, item := range feed.Items {

		var author string
		if len(item.DublinCoreExt.Creator) > 0 {
			author = item.DublinCoreExt.Creator[0]
		}

		var categories []string
		categories = append(categories, item.Categories...)

		var media string
		if len(item.Enclosures) > 0 {
			media = item.Enclosures[0].URL
		}

		notice := models.Notice{
			Title:           item.Title,
			Author:          author,
			Description:     item.Description,
			Link:            item.Link,
			Categories:      categories,
			PublicationDate: item.Published,
			Media:           media,
		}

		*notices = append(*notices, notice)
	}
	return nil
}

func (storage *Storage) GetNewsNYTimes(notices *[]models.Notice) error {
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(storage.nyTimes)

	for _, item := range feed.Items {

		var author string
		if len(item.DublinCoreExt.Creator) > 0 {
			author = item.DublinCoreExt.Creator[0]
		}

		var categories []string
		categories = append(categories, item.Categories...)

		var media string
		if len(item.Extensions["media"]["content"]) > 0 {
			media = item.Extensions["media"]["content"][0].Attrs["url"]
		}

		notice := models.Notice{
			Title:           item.Title,
			Link:            item.Link,
			Description:     item.Description,
			Author:          author,
			PublicationDate: item.Published,
			Categories:      categories,
			Media:           media,
		}

		*notices = append(*notices, notice)
	}

	return nil
}

func (storage *Storage) GetNewsFoxSports(notices *[]models.Notice) error {
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(storage.foxSports)

	for _, item := range feed.Items {

		var categories []string
		categories = append(categories, item.Categories...)

		var media string
		if len(item.Extensions["media"]["content"]) > 0 {
			media = item.Extensions["media"]["content"][0].Attrs["url"]
		}

		notice := models.Notice{
			Title:           item.Title,
			Link:            item.Link,
			Categories:      categories,
			Description:     item.Description,
			PublicationDate: item.Published,
			Media:           media,
			Author:          "Fox Sports",
		}

		*notices = append(*notices, notice)
	}
	return nil
}

func (storage *Storage) GetNewsYahoo(notices *[]models.Notice) error {
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(storage.yahooSports)

	for _, item := range feed.Items {
		var author string
		if len(item.DublinCoreExt.Creator) > 0 {
			author = item.DublinCoreExt.Creator[0]
		}

		var categories []string
		categories = append(categories, item.Categories...)

		notice := models.Notice{
			Title:           item.Title,
			Author:          author,
			Description:     item.Description,
			PublicationDate: item.Published,
			Link:            item.Link,
			Categories:      categories,
		}

		*notices = append(*notices, notice)
	}
	return nil
}

func (storage *Storage) GetNews101GreatGoals(notices *[]models.Notice) error {
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(storage.greatGoals101)

	for _, item := range feed.Items {
		var author string
		if len(item.DublinCoreExt.Creator) > 0 {
			author = item.DublinCoreExt.Creator[0]
		}

		notice := models.Notice{
			Title:           item.Title,
			Link:            item.Link,
			PublicationDate: item.Published,
			Author:          author,
			Description:     item.Description,
		}

		*notices = append(*notices, notice)
	}
	return nil
}

func (storage *Storage) Get90Min(notices *[]models.Notice) error {
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(storage.ninetyMin)

	for _, item := range feed.Items {
		var media string
		if len(item.Extensions["media"]["thumbnail"]) > 0 {
			media = item.Extensions["media"]["thumbnail"][0].Attrs["url"]
		}

		notice := models.Notice{
			Title:           item.Title,
			Link:            item.Link,
			Author:          item.Author.Name,
			Description:     item.Description,
			PublicationDate: item.Published,
			Media:           media,
		}

		*notices = append(*notices, notice)
	}

	return nil
}
