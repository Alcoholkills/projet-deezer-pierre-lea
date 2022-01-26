import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { firstValueFrom, Observable } from "rxjs";
import { DeezerService } from "../services/deezer.service";
import { AudioService } from "../services/audio.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  private readonly id: number;
  public album: any;

  constructor(private location: Location, private route: ActivatedRoute, private deezerService: DeezerService, public audioService: AudioService) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  public back() {
    this.location.back();
  }

  async ngOnInit() {
    const albumObs$: Observable<any> = this.deezerService.getAlbum(this.id);
    this.album = await firstValueFrom(albumObs$);
  }

}
