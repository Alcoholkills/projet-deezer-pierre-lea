import {Component, OnInit} from '@angular/core';
import {FavoriteslistService} from "../favoriteslist.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

// TODO faire une liste de favoris
// Faire des services par categories : un album
export class FavoritesComponent implements OnInit{

  constructor(public favoriteslistService: FavoriteslistService) {}

  public ngOnInit(): void {
    console.log(this.favoriteslistService.favAlbums[0].get("Name"))
  }
}
