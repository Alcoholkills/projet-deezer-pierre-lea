import { Component, OnInit } from '@angular/core';
import { DeezerService } from "../deezer.service";
import { PaginationService } from "../pagination.service";
import {FavoriteslistService} from "../favoriteslist.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public AlbumBool = true;
  public ArtistBool = true;
  public TrackBool = true;
  public favImage = "assets/fav.svg";
  public noFavImage = "assets/not-fav.svg";
  public tempImage = "assets/not-fav.svg";

  constructor(public deezerService: DeezerService,
              public paginationService: PaginationService,
              public favoriteslist: FavoriteslistService) {
    this.deezerAlbumData();
    console.log("GUACAMOLE");
    console.log(deezerService.responseAlbum.data);
  }

  ngOnInit(): void {
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

  public homeAddAlbum(item: any): void {
    this.favoriteslist.addAlbum(item.cover_small, item.title, item.artist.name);
    if (this.AlbumBool) {
      this.tempImage = this.favImage;
    } else {
      this.tempImage = this.noFavImage;
    }
    this.AlbumBool = !this.AlbumBool;
  }

  public homeAddArtist(item: any): void {
    this.favoriteslist.addArtist(item.picture_small, item.name);
    if (this.ArtistBool) {
      this.tempImage = this.favImage;
    } else {
      this.tempImage = this.noFavImage;
    }
    this.ArtistBool = !this.ArtistBool;
  }

  public homeAddTrack(item: any): void {
    this.favoriteslist.addTrack(item.album.cover_small, item.title, item.artist.name)
    if (this.TrackBool) {
      this.tempImage = this.favImage;
    } else {
      this.tempImage = this.noFavImage;
    }
    this.TrackBool = !this.TrackBool;
  }

  public deezerAlbumData(): void {
    let item: any;
    for (item in this.deezerService.responseAlbum.data){
      item.set("bool", false);
    }
  }
}
