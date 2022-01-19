import { Component, OnInit } from '@angular/core';
import {DeezerService} from "../deezer.service";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  private title: string;
  private preview_link: string;

  constructor(public deezerService: DeezerService) {
    this.title = deezerService.response.title;
    this.preview_link = deezerService.response.preview;
  }

  ngOnInit(): void {
    console.log("TRACKS");
    console.log(this.title);
    console.log(this.preview_link);
  }

}
