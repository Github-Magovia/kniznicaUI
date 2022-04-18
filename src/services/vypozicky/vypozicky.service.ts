import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vypozicka} from "../../app/models/vypozicka.model";

@Injectable({
  providedIn: 'root'
})
export class VypozickyService {
  private apiUrl = 'http://localhost:8080/api/borrowings';

  constructor(private http: HttpClient) { }

  public createBorrowing(v: Vypozicka): Observable<Vypozicka> {
    return this.http.post<Vypozicka>(`${this.apiUrl}`, v);
  }

  public getBorrowings(): Observable<Vypozicka[]> { return this.http.get<Vypozicka[]>(`${this.apiUrl}`); }

  public getBorrowingById(vypozickaId: number): Observable<Vypozicka> {
    return this.http.get<Vypozicka>(`${this.apiUrl}/${vypozickaId}`);
  }

  public deleteBorrowing(vypozickaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${vypozickaId}`); }
}
