import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { Album } from './album';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.html',
  styleUrls: ['./album.css'],
})
export class AlbumComponent implements OnInit {
  public albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  public getAlbums(): void {
    this.albumService.getAlbums().subscribe(
      (response: Album[]) => {
        this.albums = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
