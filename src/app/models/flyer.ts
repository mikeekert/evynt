export class Flyer {
    Imageurl: string;
    Title: string;
    Description: string;

    constructor(api: ApiEvyntResponse) {
        this.Imageurl = api.imageUrl;
        this.Title = api.name;
        this.Description = api.description;
    }
}

export interface ApiEvyntResponse {
    'imageUrl': string;
    'description': string;
    'name': string;
    'isFeatured' : boolean;
}
