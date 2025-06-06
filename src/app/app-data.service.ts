import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './global-interfaces/custom-menu.interface';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  clickedCardData:any
  cartData:any = []
  wishListData:any = []
  productData:Product[] = []

  constructor(private http:HttpClient) { }

  fetchData(dataNeeded:string): Observable<any> {
    const apiUrl = 'https://fakestoreapi.com/' + dataNeeded ;
    return this.http.get(apiUrl);
  }

  

}
