import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { DeezerService } from "../deezer.service";
import { firstValueFrom, Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchForm = this.fb.group({
    search: ['']
  });

  constructor(private fb: FormBuilder, private deezerService: DeezerService) { }

  ngOnInit(): void {
  }

  public async onSubmit() {
    const obs$: Observable<any> = this.deezerService.getArtist();
    this.deezerService.response = await firstValueFrom(obs$);
  }
}
