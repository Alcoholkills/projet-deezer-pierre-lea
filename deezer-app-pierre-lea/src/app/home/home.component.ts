import { Component, OnInit } from '@angular/core';
import { DeezerService } from "../deezer.service";
import { PaginationService } from "../pagination.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public deezerService: DeezerService, public paginationService: PaginationService) { }

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
}
