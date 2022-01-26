import {Component, OnInit} from '@angular/core';
import {FavoriteslistService} from "../services/favoriteslist.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {AudioService} from "../services/audio.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent implements OnInit {

  constructor(private router: Router, private location: Location, public favoriteslistService: FavoriteslistService, public audioService: AudioService) {}

  public ngOnInit(): void {
  }

  public back() {
    this.location.back();
  }

  public routeToAlbum(id?: string) {
    this.router.navigate(['album', id]);
  }

  public routeToArtist(id?: string) {
    this.router.navigate(['artist', id]);
  }

}
