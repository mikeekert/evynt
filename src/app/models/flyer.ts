export class Flyer {
    Imageurl: string;
    Title: string;
    Description: string;
    IsFeatured: boolean;
    SceneIdentifier: string;
    UserImageUrl: string;
    Postedby: string;

    constructor(api: ApiEvyntResponse) {
        this.Imageurl = api.imageUrl;
        this.Title = api.name;
        this.Description = api.description;
        this.IsFeatured = api.isFeatured;
        this.SceneIdentifier = api.sceneIdentifier;
        this.UserImageUrl = api.userImageUrl;
        this.Postedby = api.postedBy;
    }
}
export class EvyntResponse implements ApiEvyntResponse {
    'imageUrl': string;
    'description': string;
    'name': string;
    'isFeatured': boolean;
    'sceneIdentifier': string;
    'userImageUrl' : string;
    'postedBy' : string;
}

export interface ApiEvyntResponse {
  'imageUrl': string;
  'description': string;
  'name': string;
  'isFeatured': boolean;
  'sceneIdentifier': string;
  'userImageUrl': string;
  'postedBy': string;
}
