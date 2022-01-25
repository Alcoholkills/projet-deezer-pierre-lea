import { Component, OnInit } from '@angular/core';
import { DeezerService } from "../deezer.service";
import { PaginationService } from "../pagination.service";
import { Router } from "@angular/router";
import { AudioService } from "../audio.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public deezerService: DeezerService, public paginationService: PaginationService, public audioService: AudioService) { }

  ngOnInit(): void {
  }

  public routeToArtist(id: number) {
    this.router.navigate(['artist', id]);
  }

  public routeToAlbum(id: number) {
    this.router.navigate(['album', id]);
  }

}
