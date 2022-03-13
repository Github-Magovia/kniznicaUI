export class Kniha {
  id?: string;
  nazov: string;
  autor: string;
  dostupnost: string;

  constructor(id: string, nazov: string, autor: string , dostupnost: string) {
    this.id = id;
    this.nazov = nazov;
    this.autor = autor;
    this.dostupnost = dostupnost;
  }
}
