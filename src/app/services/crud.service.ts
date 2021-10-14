import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CRUDService {


  url = 'https://app-manga-list.herokuapp.com/api/mangas'
  constructor(private http: HttpClient) { }

  findAll<T>(url:string): Observable<T[]>{
    return this.http.get<T[]>(this.url + url,);
  }
  add<T>(insert:T): Observable<T>{
    return this.http.post<T>(this.url, insert)
  }
  delete<T>(id:number): Observable<T> {
    return this.http.delete<T>(`${this.url}/${id}`)
  }
}
