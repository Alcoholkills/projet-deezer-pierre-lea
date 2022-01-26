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

  public removeArtist(artistName: string) {
    let index: number = -1;
    for (let item of this.favArtists) {
      if (item.get("Name") == artistName) {
        index = this.favArtists.indexOf(item);
        break;
      }
    }

    this.favArtists.splice(index, 1);

  }

  public containsArtist(artistName: string): boolean {
    for (let item of this.favArtists) {
      if (item.get("Name") == artistName) {
        return true;
      }
    }
    return false;
  }

  public addAlbum(albumImage: string, albumName: string, artistName: string) {
    this.favAlbums.push(new Map<string,string>([
      ["Image", albumImage],
      ["Name", albumName],
      ["Artist", artistName]
    ]));
  }

  public removeAlbum(albumName: string) {
    let index: number = -1;
    for (let item of this.favAlbums) {
      if (item.get("Name") == albumName) {
        index = this.favAlbums.indexOf(item);
        break;
      }
    }
    this.favAlbums.splice(index, 1);
  }

  public containsAlbum(albumName: string): boolean {
    for (let item of this.favAlbums) {
      if (item.get("Name") == albumName) {
        return true;
      }
    }
    return false;
  }

  public addTrack(albumImage: string, trackname: string, artistName: string) {
    this.favTracks.push(new Map<string,string>([
      ["Image", albumImage],
      ["Name", trackname],
      ["Artist", artistName]
    ]));
  }

  public removeTrack(trackname: string) {
    let index: number = -1;
    for (let item of this.favTracks) {
      if (item.get("Name") == trackname) {
        index = this.favTracks.indexOf(item);
        break;
      }
    }
    this.favTracks.splice(index, 1);
  }

  public containsTrack(trackname: string): boolean {
    for (let item of this.favTracks) {
      if (item.get("Name") == trackname) {
        return true;
      }
    }
    return false;
  }

}
