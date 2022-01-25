import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DeezerService } from "../deezer.service";
import { firstValueFrom, Observable } from "rxjs";
import { Location } from "@angular/common";
import { AudioService } from "../audio.service";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ArtistComponent implements OnInit {

  private readonly id: number;
  public artist: any;
  public top: any;
  public albums: any;
  public nbAlbumsPerCarouselItem: number = 6;
  public nbCarouselItems: number = 0;

  constructor(private config: NgbCarouselConfig, private location: Location, private route: ActivatedRoute, private deezerService: DeezerService, public audioService: AudioService) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.config.interval = 0;
    this.config.wrap = false;
    this.config.keyboard = false;
  }

  public back() {
    this.location.back();
  }

  public counter(nb: number) {
    return new Array(nb);
  }

  async ngOnInit() {
    const artistObs$: Observable<any> = this.deezerService.getArtist(this.id);
    this.artist = await firstValueFrom(artistObs$);

    const topObs$: Observable<any> = this.deezerService.getArtistTop5(this.id);
    this.top = await firstValueFrom(topObs$);

    const albumsObs$: Observable<any> = this.deezerService.getArtistAlbums(this.id);
    this.albums = await firstValueFrom(albumsObs$);
    this.nbCarouselItems = Math.ceil(this.albums.data.length/this.nbAlbumsPerCarouselItem);
  }

}
