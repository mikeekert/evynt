export class Post {
  Imageurl: string;
  Description: string;
  PostedBy: string;
  UserImageUrl: string;
  PostDts: number;

  constructor(api: ApiPostResponse) {
    this.Imageurl = api.imageUrl;
    this.Description = api.description;
    this.PostedBy = api.postedBy;
    this.UserImageUrl = api.userImageUrl;
  }
}

export interface ApiPostResponse {
  'imageUrl': string;
  'description': string;
  'postedBy': string;
  'postDts': number;
  'userImageUrl': string;
}


export interface ApiPagedResponse<TResponse>{
  'data' : TResponse,
  'total' : number,
  'page' : number
}

export interface ApiResponse<TResponse>{
  'data' : TResponse
}
