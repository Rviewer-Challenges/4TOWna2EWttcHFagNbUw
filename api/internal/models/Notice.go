package models

type Notice struct {
	Title           string
	Author          string
	Description     string
	PublicationDate string
	Categories      []string
	Media           string
	Link            string
}
