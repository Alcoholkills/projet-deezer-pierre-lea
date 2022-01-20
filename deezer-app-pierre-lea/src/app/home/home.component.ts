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
}
