import { Component, OnInit } from '@angular/core';
import { DeezerService } from "../deezer.service";
import { PaginationService } from "../pagination.service";
import {FavoriteslistService} from "../favoriteslist.service";
import { Router } from "@angular/router";
import { AudioService } from "../audio.service";

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

  constructor(private router: Router, public deezerService: DeezerService, public paginationService: PaginationService, public audioService: AudioService, public favoriteslist: FavoriteslistService) { }


  ngOnInit(): void {
  }

  public routeToArtist(id: number) {
    this.router.navigate(['artist', id]);
  }

  public routeToAlbum(id: number) {
    this.router.navigate(['album', id]);
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
