export interface FeedItem {
    id : number;
    postType : string;
    title : string;
    imageUrl : string;
    description : string;
    userId : string;
    userImageUrl : string;
    postedBy : string;
    latitude : number;
    longitude : number;
    postDts : number;
    likes : number;
    likedByRequestingUser : boolean;
}
