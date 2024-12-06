export class Genre {
  genreId: number;
  name: string;

  constructor(genreId: number, name: string) {
    this.genreId = genreId;
    this.name = name;
  }
}

export interface GenreResponse {
  content: Genre[];
  pageable: any; // Ha a `pageable` tulajdonságot nem használjuk, lehet `any`
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: any;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
