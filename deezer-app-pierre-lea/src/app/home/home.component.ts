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

  constructor(public deezerService: DeezerService,
              public paginationService: PaginationService,
              public favoriteslist: FavoriteslistService) {
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

  public manageAlbumFavorite(item: any): void {
    if (this.favoriteslist.containsAlbum(item.title)) {
      this.favoriteslist.removeAlbum(item.title);
    } else {
      this.favoriteslist.addAlbum(item.cover_small, item.title, item.artist.name);
    }
  }

  public manageArtistFavorite(item: any): void {
    if (this.favoriteslist.containsArtist(item.name)) {
      this.favoriteslist.removeArtist(item.name);
    } else {
      this.favoriteslist.addArtist(item.picture_small, item.name);
    }
  }

  public manageTrackFavorite(item: any): void {
    if (this.favoriteslist.containsTrack(item.title)) {
      this.favoriteslist.removeTrack(item.title);
    } else {
      this.favoriteslist.addTrack(item.album.cover_small, item.title, item.artist.name);
    }
  }

}
