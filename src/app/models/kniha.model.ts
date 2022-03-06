export class Kniha {
  id: number;
  nazov: string;
  autor: string;
  dostupnost: string;

  constructor(id: number, nazov: string, autor: string , dostupnost: string) {
    this.id = id;
    this.nazov = nazov;
    this.autor = autor;
    this.dostupnost = dostupnost;
  }
}
