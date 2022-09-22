import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderForFulfillment } from './orders-page';
import { environment } from 'src/environments/environment';
import { Address } from '../address/address';

@Injectable({
  providedIn: 'root',
})
export class OrdersPageService {
  private url = `${environment.apiUrl}/OrderForFulfillment`;
  // private url = 'localhost:4200';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getPendingOrders(id: number): Observable<OrderForFulfillment[]> {
    // var url = `${this.url}/${id}`;
    var url = `${this.url}/pending`;
    console.log(`url = ${url}`);
    return this.http.get<OrderForFulfillment[]>(url);
  }

  // Grabs all fulfilled orders that are still in OrderForFulfillment entity
  getFulfilledOrders(): Observable<OrderForFulfillment[]> {
    var url = `${this.url}/fulfilled`;
    return this.http.get<OrderForFulfillment[]>(url);
  }

  // fulfillOrder(orders: OrderForFulfillment){
  //   this.http.post<FulfilledOrder>(orders);
  // }

  updateOrderStatus(
    id: Number,
    orderForFulfillment: OrderForFulfillment
  ): Observable<OrderForFulfillment> {
    var url = `${this.url}/${id}`;
    return this.http.put<OrderForFulfillment>(url, orderForFulfillment);
  }

  // TODO: get guid route to pdf page
  // compare call to service functions to get guid.
}
