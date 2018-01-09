import { Component, OnInit } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { AuthHttp } from 'angular2-jwt';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed: string;

  private feedApiUrn = "api/Post/ByUser/xn4FRYDxwoeXiasmjC6S822xjeU2"; //TODO: update this to /api/Post/Latitude/{latitude}/Longitude/{longitude}/Range/{range}/Minimum/{minimum}
  private apiUriBase: string;
  
  constructor(private http: AuthHttp) { 
    this.apiUriBase = environment.citiskopeApi.baseUrl;
  }

  ngOnInit() {
    //Gets posts
    this.getFeed().subscribe(response => {
      this.feed = response.text(); //TODO: make objects to return to the view
    });
  }

  getFeed() {
    const apiUrl = `${this.apiUriBase}/${this.feedApiUrn}`;
    return this.http.get(
            apiUrl,
            {
                headers: new Headers({
                    "Accept": "application/json",
                    "Content-Type": "application/json" 
                })
            }
        )
  }

}
