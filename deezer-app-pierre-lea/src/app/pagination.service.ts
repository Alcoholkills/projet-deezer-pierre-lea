import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from "rxjs";
import { DeezerService } from "./deezer.service";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  public nbPages: number = 0;
  public nbPerPage: number = 10;
  public currentPage: number = 0;
  public currentItem: number = 0;

  constructor(public deezerService: DeezerService) { }

  public counter(nb: number) {
    return new Array(nb);
  }

  public async prev() {
    if (this.currentPage != 0) {
      this.currentPage -= 1;
      this.currentItem -= this.nbPerPage;
      await this.search();
    }
  }

  public async next() {
    if (this.currentPage != this.nbPages - 1) {
      this.currentPage += 1;
      this.currentItem += this.nbPerPage;
      await this.search();
    }
  }

  private async search() {
    if (this.deezerService.category === "artist") {
      const obs$: Observable<any> = this.deezerService.getArtistsList(this.deezerService.search, this.currentItem, this.nbPerPage);
      this.deezerService.responseArtist = await firstValueFrom(obs$);
    } else if (this.deezerService.category === "track") {
      const obs$: Observable<any> = this.deezerService.getTracksList(this.deezerService.search, this.currentItem, this.nbPerPage);
      this.deezerService.responseTrack = await firstValueFrom(obs$);
    } else {
      const obs$: Observable<any> = this.deezerService.getAlbumsList(this.deezerService.search, this.currentItem, this.nbPerPage);
      this.deezerService.responseAlbum = await firstValueFrom(obs$);
    }
  }
}
