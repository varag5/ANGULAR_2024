import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiServerUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  public getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiServerUrl}/Artist`);
  }

public deleteArtist(artistId: string | null): Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/Artist/delete/${artistId}`, {
    responseType: 'text' as 'json'
  });
}


}
