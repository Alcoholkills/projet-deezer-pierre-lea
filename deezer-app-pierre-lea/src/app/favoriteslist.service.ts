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

  public addArtistExplicit(artistImage: string, artistName: string, fanCount: number) {
    this.addArtist(new Artist(artistImage, artistName, fanCount));
  }

  public addArtist(artist: Artist){
    this.favArtists.push(artist);
  }

  public removeArtistExplicit(artistImage: string, artistName: string, fanCount: number) {
    this.removeArtist(new Artist(artistImage, artistName, fanCount));
  }

  public removeArtist(artist: Artist) {
    this.favArtists.splice(this.favArtists.indexOf(artist), 1)
  }

  public addAlbumExplicit(albumImage: string, albumName: string, artistName: string) {
    this.addAlbum(new Album(albumImage, albumName, artistName));
  }

  public addAlbum(album: Album) {
    this.favAlbums.push(album);
  }

  public removeAlbumExplicit(albumImage: string, albumName: string, artistName: string) {
    this.removeAlbum(new Album(albumImage, albumName, artistName));
  }

  public removeAlbum(album: Album) {
    this.favAlbums.splice(this.favAlbums.indexOf(album), 1);
  }

  public addTrackExplicit(albumImage: string, trackname: string, artistName: string) {
    this.addTrack(new Track(albumImage, trackname, artistName));
  }

  public addTrack(track: Track) {
    this.favTracks.push(track);
  }

  public removeTrackExplicit(albumImage: string, trackname: string, artistName: string) {
    this.removeTrack(new Track(albumImage, trackname, artistName));
  }

  public removeTrack(track: Track) {
    this.favTracks.slice(this.favTracks.indexOf(track), 1);
  }

}
