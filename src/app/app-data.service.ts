import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private http:HttpClient) { }

  fetchData(): Observable<any> {
    const apiUrl = 'https://fakestoreapi.com/products';
    return this.http.get(apiUrl);
  }

}
