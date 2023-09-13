import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  clickedCardData:any
  cartData:any = []

  constructor(private http:HttpClient) { }

  fetchData(dataNeeded:string): Observable<any> {
    const apiUrl = 'https://fakestoreapi.com/' + dataNeeded ;
    return this.http.get(apiUrl);
  }

}
