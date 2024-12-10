import { Routes, RouterModule } from '@angular/router';
import {NgModule} from  '@angular/core'
import{ HomeComponent} from './home/home.component';
import{ ArtistComponent} from './artist/artist.component';
import { BrowserModule } from '@angular/platform-browser'
import { SongsComponent } from './song/song.component';
import { AlbumComponent } from './albums/album.component';
import { GenreComponent } from './genre/genre.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'artists', component: ArtistComponent},
  { path: 'form', component: FormComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'genres', component: GenreComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule(
  {
    imports: [RouterModule.forRoot(routes),BrowserModule],
    exports:[RouterModule]
    })

  export class AppRoutingModule{}
