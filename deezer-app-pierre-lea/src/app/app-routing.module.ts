import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import { ArtistComponent } from "./artist/artist.component";
import { AlbumComponent } from "./album/album.component";


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "favorites", component: FavoritesComponent},
  { path: "artist/:id", component: ArtistComponent },
  { path: "album/:id", component: AlbumComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
