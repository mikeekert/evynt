import {ApiEvyntResponse} from './apiEvyntResponse';

export class Flyer {
  Imageurl: string;
  Title: string;
  Description: string;
  IsFeatured: boolean;
  SceneIdentifier: string;
  UserImageUrl: string;
  Postedby: string;
  UserId: string;
  StartTime: string;
  FormattedAddress: string;
  GooglePlacesId: string;

  private shortDescriptionLength = 145;
  constructor(api: ApiEvyntResponse) {
    this.Imageurl = api.imageUrl;
    this.Title = api.name;
    this.Description = api.description;
    this.IsFeatured = api.isFeatured;
    this.SceneIdentifier = api.sceneIdentifier;
    this.UserImageUrl = api.userImageUrl;
    this.Postedby = api.postedBy;
    this.UserId = api.userId;
    this.StartTime = api.startTime;
    this.FormattedAddress = api.formattedAddress;
    this.GooglePlacesId = api.googleplacesId;
  }

  ShortDescription(): String {
    if (this.Description && this.Description.length > this.shortDescriptionLength) {
      return this.Description.substring(0, this.shortDescriptionLength) + ' ...';
    }

    return this.Description;
  }
}

