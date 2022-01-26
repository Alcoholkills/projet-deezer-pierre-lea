import { Component, OnInit } from '@angular/core';
import { DeezerService } from "../services/deezer.service";
import { PaginationService } from "../services/pagination.service";
import {FavoriteslistService} from "../services/favoriteslist.service";
import { Router } from "@angular/router";
import { AudioService } from "../services/audio.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public favImage = "assets/fav.svg";
  public noFavImage = "assets/not-fav.svg";

  constructor(private router: Router, public deezerService: DeezerService, public paginationService: PaginationService, public audioService: AudioService, public favoriteslist: FavoriteslistService) { }


  ngOnInit(): void {
  }

  public routeToArtist(e: any, id: number) {
    if (e.target.className !== "favorite") {
      this.router.navigate(['artist', id]);
    }
  }

  public routeToAlbum(e: any, id: number) {
    if (e.target.className !== "favorite") {
      this.router.navigate(['album', id]);
    }
  }

}
