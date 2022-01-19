import { Component, OnInit } from '@angular/core';
import {DeezerService} from "../deezer.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
// Il faut deja avoir l'id et faire la recherche dans deezer avant de load ce composant
export class AlbumComponent implements OnInit {
  private artist: string;
  private album: string;
  private tracks;
  private data;
  private cover_big_link: string;

  // Il faut recuperer quelque part le nom de l'album, ou son url (genuine question)

  constructor(public deezerService: DeezerService) {
    this.artist = deezerService.response.artist.name;
    this.album = deezerService.response.title;
    this.data = deezerService.response.tracks.data;
    this.tracks = this.tracksIdToArray(deezerService.response.tracks.data);
    this.cover_big_link = deezerService.response.cover_big;
  }

  private tracksIdToArray(dataTrackList: any) {
    let returnedArray: Array<string> = [];
    for (let dict of dataTrackList) {
      // returnedArray.push(dict.get("id"));
      if (dict.has("id")) {
        returnedArray.push(dict.get("id"));
      }
    }
    return returnedArray;

  }

  ngOnInit(): void {
    console.log("ALBUM");
    console.log(this.data);
    console.log(this.artist);
    console.log(this.album);
    console.log(this.cover_big_link);
    console.log(this.data);
    for (let track of this.tracks) {
      console.log(track);
    }
  }

}
