import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getMain(url:string): Observable<any>{
    return this.http.get(url);
  }

  postMain(url:string, body: any):Observable<any>{
    return this.http.post(url, body);
  }

  putMain(url:string, body:any): Observable<any>{
    return this.http.put(url, body)
  }

}
