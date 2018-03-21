export class Flyer {
    Imageurl: string;
    Title: string;
    Description: string;
    IsFeatured: boolean;

    constructor(api: ApiEvyntResponse) {
        this.Imageurl = api.imageUrl;
        this.Title = api.name;
        this.Description = api.description;
        this.IsFeatured = api.isFeatured;
    }
}

export interface ApiEvyntResponse {
    'imageUrl': string;
    'description': string;
    'name': string;
    'isFeatured': boolean;
}
