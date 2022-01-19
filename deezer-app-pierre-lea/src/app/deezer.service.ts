import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  private baseUrl: string = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/";
  public response: any;

  constructor(private http: HttpClient) { }

  public getArtist() {
    // const url: string = this.baseUrl + "search/track/autocomplete?limit=1&q=eminem";
    // const url: string = this.baseUrl + "/album/302127";
    // const url: string = this.baseUrl + "/artist/27";
    const url: string = this.baseUrl + "/track/3135556";
    return this.http.get(url);
  }
}
