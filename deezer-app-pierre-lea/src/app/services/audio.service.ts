import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  public triggerAudio(e: any) {
    if (e.target.tagName.toLowerCase() !== "audio" && e.target.className !== "favorite") {
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
