import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { DeezerService } from "../deezer.service";
import { firstValueFrom, Observable } from "rxjs";

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

  constructor(private fb: FormBuilder, private deezerService: DeezerService) { }

  ngOnInit(): void {
  }

  public async onSubmit() {
    let category = this.searchForm.get('category')?.value;
    let search = this.searchForm.get('search')?.value;

    if (category === "artist") {
      const obs$: Observable<any> = this.deezerService.getArtistsList(search, 0, 10);
      this.deezerService.responseArtist = await firstValueFrom(obs$);
      this.deezerService.responseAlbum = null;
      this.deezerService.responseTrack = null;
      console.warn(this.deezerService.responseArtist);
    } else if (category === "track") {
      const obs$: Observable<any> = this.deezerService.getTracksList(search, 0, 10);
      this.deezerService.responseTrack = await firstValueFrom(obs$);
      this.deezerService.responseArtist = null;
      this.deezerService.responseAlbum = null;
      console.warn(this.deezerService.responseTrack);
    } else {
      const obs$: Observable<any> = this.deezerService.getAlbumsList(search, 0, 10);
      this.deezerService.responseAlbum = await firstValueFrom(obs$);
      this.deezerService.responseArtist = null;
      this.deezerService.responseTrack = null;
      console.warn(this.deezerService.responseAlbum);
    }
  }
}
