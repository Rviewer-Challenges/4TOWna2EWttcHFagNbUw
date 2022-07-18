export interface Notice {
    Title: string;
    Author: string;
    ProviderID: number;
    Description: string;
    PublicationDate: string;
    Categories: string[] | null;
    Media: string;
    Link: string;
    Date: Date;
}
