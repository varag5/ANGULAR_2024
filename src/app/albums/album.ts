export class Album {
  albumId: number;
  title: string;
  releaseDate: string;
  artist: {
    id: number;
    name: string;
    genre: {
      genreId: number;
      name: string;
    };
  };

  constructor(albumId: number, title: string, releaseDate: string, artist: any) {
    this.albumId = albumId;
    this.title = title;
    this.releaseDate = releaseDate;
    this.artist = artist;
  }
}
