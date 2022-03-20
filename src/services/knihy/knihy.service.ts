import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Kniha} from "../../app/models/kniha.model";

@Injectable({
  providedIn: 'root'
})
export class KnihyService {
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) { }

  public createBook(k: Kniha): Observable<Kniha> { return this.http.post<Kniha>(`${this.apiUrl}`, k); }

  public getAllBooks(): Observable<Kniha[]> { return this.http.get<Kniha[]>(`${this.apiUrl}`); }

  public getBookById(knihaId: number): Observable<Kniha> {
    return this.http.get<Kniha>(`${this.apiUrl}/${knihaId}`);
  }

  public updateBook(knihaId: number, k: Kniha): Observable<Kniha> {
    return this.http.put<Kniha>(`${this.apiUrl}/${knihaId}`, k);
  }

  public deleteBook(knihaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${knihaId}`); }
}
