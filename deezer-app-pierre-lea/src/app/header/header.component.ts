import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { DeezerService } from "../deezer.service";
import { firstValueFrom, Observable } from "rxjs";
import { PaginationService } from "../pagination.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchForm = this.fb.group({
    category: ['artist'],
    search: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private deezerService: DeezerService, private paginationService: PaginationService) { }

  ngOnInit(): void {
  }

  public async onSubmit() {
    this.deezerService.category = this.searchForm.get('category')?.value;
    this.deezerService.search = this.searchForm.get('search')?.value;
    this.paginationService.currentPage = 0;
    this.paginationService.currentItem = 0;

    if (this.deezerService.category === "artist") {
      const obs$: Observable<any> = this.deezerService.getArtistsList(this.deezerService.search, this.paginationService.currentItem, this.paginationService.nbPerPage);
      this.deezerService.responseArtist = await firstValueFrom(obs$);
      this.deezerService.responseAlbum = null;
      this.deezerService.responseTrack = null;
      this.paginationService.nbPages = Math.ceil(this.deezerService.responseArtist.total/this.paginationService.nbPerPage);
      console.warn(this.deezerService.responseArtist);
    } else if (this.deezerService.category === "track") {
      const obs$: Observable<any> = this.deezerService.getTracksList(this.deezerService.search, this.paginationService.currentItem, this.paginationService.nbPerPage);
      this.deezerService.responseTrack = await firstValueFrom(obs$);
      this.deezerService.responseArtist = null;
      this.deezerService.responseAlbum = null;
      this.paginationService.nbPages = Math.ceil(this.deezerService.responseTrack.total/this.paginationService.nbPerPage);
      console.warn(this.deezerService.responseTrack);
    } else {
      const obs$: Observable<any> = this.deezerService.getAlbumsList(this.deezerService.search, this.paginationService.currentItem, this.paginationService.nbPerPage);
      this.deezerService.responseAlbum = await firstValueFrom(obs$);
      this.deezerService.responseArtist = null;
      this.deezerService.responseTrack = null;
      this.paginationService.nbPages = Math.ceil(this.deezerService.responseAlbum.total/this.paginationService.nbPerPage);
      console.warn(this.deezerService.responseAlbum);
    }
  }
}
