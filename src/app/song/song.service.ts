import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from './song';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.apiServerUrl}/Songs`);
  }
}
