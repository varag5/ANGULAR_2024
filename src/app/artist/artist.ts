export class Artist {
  public id: number;
  public name: string;
  public genre: string;
  public albums: number;
  public profilePicture: string;

  constructor(id: number, name: string, genre: string, albums: number, profilePicture: string) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.albums = albums;
    this.profilePicture = profilePicture;
  }
}
