import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CRUDService {


  constructor(private http: HttpClient) { }

  findAll<T>(url:string): Observable<T[]>{
    return this.http.get<T[]>(url);
  }
  findOne<T>(id:number,url:string):Observable<T>{
    return this.http.get<T>(`${url}/${id}`)
  }
  add<T>(insert:T, url:string): Observable<T>{
    return this.http.post<T>(url, insert)
  }
  delete<T>(id:number, url:string): Observable<T> {
    return this.http.delete<T>(`${url}/${id}`)
  }
  edit(id: number, data:any, url:string): Observable<any>{
    return this.http.put(`${url}/${id}`, data)
  }
}
