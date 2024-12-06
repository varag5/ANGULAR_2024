import { Component, OnInit } from '@angular/core';
import { SongsService } from './song.service';
import { Song } from './song';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song.html',
  styleUrls: ['./song.css'],
})
export class SongsComponent implements OnInit {
  public songs: Song[] = [];

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.getSongs();
  }

  public getSongs(): void {
    this.songsService.getSongs().subscribe(
      (response: Song[]) => {
        this.songs = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
