import { Component, OnInit } from '@angular/core';
import {DeezerService} from "../deezer.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  private artist: string;
  private image_big_link: string;

  constructor(public deezerService: DeezerService) {
    this.artist = deezerService.response.name;
    this.image_big_link = deezerService.response.picture_big;
  }

  ngOnInit(): void {
    console.log("ARTIST");
    console.log(this.artist);
    console.log(this.image_big_link);
  }

}
