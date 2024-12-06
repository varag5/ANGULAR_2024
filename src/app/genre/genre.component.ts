import { Component, OnInit } from '@angular/core';
import { GenreService } from './genre.service';
import { Genre } from './genre';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './genre.html',
  styleUrls: ['./genre.css'],
})
export class GenreComponent implements OnInit {
  public genres: Genre[] = [];

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  public getGenres(): void {
    this.genreService.getGenres().subscribe(
      (response) => {
        this.genres = response.content; // A válasz `content` mezőjéből nyerjük ki az adatokat
        console.log(this.genres);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
