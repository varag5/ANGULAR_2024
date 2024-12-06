import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
//import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
//import {CommonModule} from "@angular/common";
//import{ ArtistComponent} from './artist/artist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Music Library';
}
