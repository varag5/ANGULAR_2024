export class Song {
  id: number;
  songTitle: string;
  duration: number;
  album: {
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
  };
  artist: {
    id: number;
    name: string;
    genre: {
      genreId: number;
      name: string;
    };
  };
  genre: {
    genreId: number;
    name: string;
  };

  constructor(
    id: number,
    songTitle: string,
    duration: number,
    album: any,
    artist: any,
    genre: any
  ) {
    this.id = id;
    this.songTitle = songTitle;
    this.duration = duration;
    this.album = album;
    this.artist = artist;
    this.genre = genre;
  }
}
