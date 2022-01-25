import { Injectable } from '@angular/core';
import {Artist} from "./artist/artist.component";
import {Album} from "./album/album.component";
import {Track} from "./track/track.component";

@Injectable({
  providedIn: 'root'
})
export class FavoriteslistService {
  public favArtists: Array<Artist>;
  public favAlbums: Array<Album>;
  public favTracks: Array<Track>;

  constructor() {
    this.favArtists = [];
    this.favAlbums = [];
    this.favTracks = [];
  }

  public addArtist(artistImage: string, artistName: string) {
    this.favArtists.push(new Artist(artistImage, artistName));
  }

  public removeArtist(artistImage: string, artistName: string) {
    this.favArtists.splice(this.favArtists.indexOf(new Artist(artistImage, artistName)), 1);
  }

  public addAlbum(albumImage: string, albumName: string, artistName: string) {
    this.favAlbums.push(new Album(albumImage, albumName, artistName));
  }

  public removeAlbum(albumImage: string, albumName: string, artistName: string) {
    this.favAlbums.splice(this.favAlbums.indexOf(new Album(albumImage, albumName, artistName)), 1);
  }

  public addTrack(albumImage: string, trackname: string, artistName: string) {
    this.favTracks.push(new Track(albumImage, trackname, artistName));
  }

  public removeTrack(albumImage: string, trackname: string, artistName: string) {
    this.favTracks.splice(this.favTracks.indexOf(new Track(albumImage, trackname, artistName)), 1);
  }

}
