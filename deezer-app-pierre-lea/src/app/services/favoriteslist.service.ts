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

  public addArtist(id: string, fans: string, artistImage: string, artistName: string) {
    this.favArtists.push(new Map<string,string>([
      ["ID", id],
      ["Fans", fans],
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

  public manageArtistFavorite(item: any): void {
    if (this.containsArtist(item.name)) {
      this.removeArtist(item.name);
    } else {
      this.addArtist(item.id, item.nb_fan, item.picture_small, item.name);
    }
  }

  public addAlbum(id: string, albumImage: string, albumName: string, artistName: string) {
    this.favAlbums.push(new Map<string,string>([
      ["ID", id],
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

  public manageAlbumFavorite(item: any): void {
    if (this.containsAlbum(item.title)) {
      this.removeAlbum(item.title);
    } else {
      this.addAlbum(item.id, item.cover_small, item.title, item.artist.name);
    }
  }

  public addTrack(albumImage: string, trackname: string, preview: string, artistName: string) {
    this.favTracks.push(new Map<string,string>([
      ["Image", albumImage],
      ["Name", trackname],
      ["Preview", preview],
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

  public manageTrackFavorite(item: any): void {
    if (this.containsTrack(item.title)) {
      this.removeTrack(item.title);
    } else {
      this.addTrack(item.album.cover_small, item.title, item.preview, item.artist.name);
    }
  }

}
