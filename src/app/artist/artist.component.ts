import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';
import { Artist } from './artist';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist.html',
  styleUrls: ['./artist.css']
})
export class ArtistComponent implements OnInit {
  public artists: Artist[] = [];

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.getArtists();
  }

  public getArtists(): void {
    this.artistService.getArtists().subscribe(
      (response: Artist[]) => {
        this.artists = response;
         console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
