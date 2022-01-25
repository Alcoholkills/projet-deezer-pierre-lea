import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

// TODO faire une liste de favoris
// Faire des services par categories : un album
export class FavoritesComponent implements OnInit {
  public range = [...Array(10).keys()];

  constructor() { }

  ngOnInit(): void {
  }

}
