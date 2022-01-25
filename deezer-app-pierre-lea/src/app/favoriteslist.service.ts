import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteslistService {
  public favArtists: Array<Map<string,string>>;
  public favAlbums: Array<Map<string,string>>;
  public favTracks: Array<Map<string,string>>;

  constructor() {
    this.favArtists = [];
    this.favAlbums = [];
    this.favTracks = [];
  }

  public addArtist(artistImage: string, artistName: string) {
    this.favArtists.push(new Map<string,string>([
      ["Image", artistImage],
      ["Name", artistName]
    ]));
  }

  public removeArtist(artistImage: string, artistName: string) {
    this.favArtists.splice(this.favArtists.indexOf(new Map<string,string>([
      ["Image", artistImage],
      ["Name", artistName]
    ])), 1);
  }

  public addAlbum(albumImage: string, albumName: string, artistName: string) {
    this.favAlbums.push(new Map<string,string>([
      ["Image", albumImage],
      ["Name", albumName],
      ["Artist", artistName]
    ]));
  }

  public removeAlbum(albumImage: string, albumName: string, artistName: string) {
    this.favAlbums.splice(this.favAlbums.push(new Map<string,string>([
      ["Image", albumImage],
      ["Name", albumName],
      ["Artist", artistName]
    ])), 1);
  }

  public addTrack(albumImage: string, trackname: string, artistName: string) {
    this.favTracks.push(new Map<string,string>([
      ["Image", albumImage],
      ["Name", trackname],
      ["Artist", artistName]
    ]));
  }

  public removeTrack(albumImage: string, trackname: string, artistName: string) {
    this.favTracks.splice(this.favTracks.push(new Map<string,string>([
      ["Image", albumImage],
      ["Name", trackname],
      ["Artist", artistName]
    ])), 1);
  }

}
