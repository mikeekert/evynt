import {ApiEvyntResponse} from './flyer';

export class Evynt {
  Imageurl: string;
  Title: string;
  Description: string;
  Featured: boolean;

  constructor(api: ApiEvyntResponse) {
    this.Imageurl = api.imageUrl;
    this.Title = api.name;
    this.Description = api.description;
    this.Featured = api.isFeatured;
  }
}
