import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre, GenreResponse } from './genre';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(
      `${this.apiServerUrl}/Genre/Pagination?page=0&size=3&sort=genreId&order=asc`
    );
  }
}
