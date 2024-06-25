import { Injectable } from '@angular/core';

//Para usar el api de http en angular
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  private apiUrl = 'https://my-json-server.typicode.com/Bastian666666666/api-repos/lista';


  constructor(private http: HttpClient) { }
  getLista(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}