import {ApiPostResponse} from "./post";

export interface ApiEvyntResponse {
  'imageUrl': string;
  'description': string;
  'name': string;
  'isFeatured': boolean;
  'sceneIdentifier': string;
  'userImageUrl': string;
  'postedBy': string;
  'userId': string;
  'startTime': string;
  'formattedAddress': string;
  'googleplacesId': string;
  'posts': [ApiPostResponse];
}

export interface ApiUserResponse {
  "userName": string,
  "imageUrl": string,
  "evynts" : [ApiEvyntResponse]
}
