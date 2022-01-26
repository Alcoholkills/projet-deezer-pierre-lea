import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  private baseUrl: string = "http://localhost:8080/http://api.deezer.com/";
  // private baseUrl: string = "http://localhost:4200/https://api.deezer.com/";
  public category: string = "artist";
  public search: string = "";
  public responseArtist: any;
  public responseTrack: any;
  public responseAlbum: any;

  constructor(private http: HttpClient) { }

  public getAlbum(id: number) {
    const url: string = this.baseUrl + "/album/" + id;
    return this.http.get(url);
  }

  public getArtistTop5(id: number) {
    const url: string = this.baseUrl + "/artist/" + id + "/top";
    return this.http.get(url);
  }

  public getArtistAlbums(id: number) {
    const url: string = this.baseUrl + "/artist/" + id + "/albums";
    return this.http.get(url);
  }

  public getArtist(id: number) {
    const url: string = this.baseUrl + "/artist/" + id;
    return this.http.get(url);
  }

  public getArtistsList(name: string, index: number, limit: number) {
    const url: string = this.baseUrl + "search/artist/autocomplete?index=" + index + "&limit=" + limit + "&q=artist:\"" + name + "\"";
    return this.http.get(url);
  }

  public getTracksList(title: string, index: number, limit: number) {
    const url: string = this.baseUrl + "search/track/autocomplete?index=" + index + "&limit=" + limit + "&q=track:\"" + title + "\"";
    return this.http.get(url);
  }

  public getAlbumsList(title: string, index: number, limit: number) {
    const url: string = this.baseUrl + "search/album/autocomplete?index=" + index + "&limit=" + limit + "&q=album:\"" + title + "\"";
    return this.http.get(url);
  }
}
