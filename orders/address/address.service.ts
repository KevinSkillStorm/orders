import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from './address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private url = `${environment.apiUrl}/Addresses`;
  // private url = 'localhost:4200';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  // Gets address based on addressId 
  getOrderAddressById(id: any): Observable<Address> {
    var url = `${this.url}/${id}`;
    return this.http.get<Address>(url, this.httpOptions);
  }
}
