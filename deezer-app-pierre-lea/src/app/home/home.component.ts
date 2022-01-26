import { Component, OnInit } from '@angular/core';
import { DeezerService } from "../deezer.service";
import { PaginationService } from "../pagination.service";
import {FavoriteslistService} from "../favoriteslist.service";
import {Album} from "../album/album.component";
import {Artist} from "../artist/artist.component";
import {Track} from "../track/track.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public AlbumBool = true;
  public ArtistBool = true;
  public TrackBool = true;
  public currentAlbumList: Array<Album>;
  public currentArtistList: Array<Artist>;
  public currentTrackList: Array<Track>;
  public favImage = "assets/fav.svg";
  public noFavImage = "assets/not-fav.svg";

  constructor(public deezerService: DeezerService,
              public paginationService: PaginationService,
              public favoriteslist: FavoriteslistService) {
    this.currentAlbumList = [];
    if (deezerService.responseAlbum) {
      // @ts-ignore
      for (let item: any in deezerService.responseAlbum.data) {
        // @ts-ignore
        this.currentAlbumList.push(new Album(item.cover_small, item.title, item.artist.name));
      }
    }
    this.currentArtistList = [];
    if (deezerService.responseArtist) {
      // @ts-ignore
      for (let item: any in deezerService.responseArtist.data) {
        // @ts-ignore
        this.currentArtistList.push(new Artist(item.picture_small, item.name, item.nb_fan));
      }
    }
    this.currentTrackList = [];
    if (deezerService.responseTrack) {
      // @ts-ignore
      for (let item: any in deezerService.responseTrack.data) {
        // @ts-ignore
        this.currentTrackList.push(new Track(item.album.cover_small, item.title, item.artist.name))
      }
    }
    console.log(this.currentArtistList);
    console.log(this.currentTrackList);
    console.log(this.currentAlbumList);
  }

  ngOnInit(): void {
    console.log(this.currentArtistList);
    console.log(this.currentTrackList);
    console.log(this.currentAlbumList);
  }

  public triggerAudio(e: any) {
    if (e.target.tagName.toLowerCase() !== "audio") {
      let li = e.target.closest("li");
      let audio = li.querySelector("audio");

      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }

  public onPlay(e: any) {
    let audios = document.getElementsByTagName("audio");

    for (let i = 0; i < audios.length; i++) {
      if (audios[i] !== e.target) {
        audios[i].pause();
        audios[i].currentTime = 0;
      }
    }
  }

  public AlbumFav(item: Album): void {
    item.isFav = true;
    this.favoriteslist.addAlbum(item);
  }

  public ArtistFav(item: Artist): void {
    this.favoriteslist.addArtist(item);
    this.ArtistBool = !this.ArtistBool;
  }

  public TrackFav(item: Track): void {
    this.favoriteslist.addTrack(item)
    this.TrackBool = !this.TrackBool;
  }

}
