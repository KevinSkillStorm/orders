import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderForFulfillment } from '../orders-page/orders-page';
import { FulfilledOrder } from './fulfilled-order';

@Injectable({
  providedIn: 'root',
})
export class FulfilledOrderService {
  private url = `${environment.apiUrl}/FulfilledOrders`;
  // private url = `localhost:4200/FulfilledOrders`;

  constructor(private http: HttpClient) {}

  // Changes status from pending to fulfilled
  // within OrderForFulfillment entity
  fulfillOrder(
    ordersForFulfillment: OrderForFulfillment
  ): Observable<FulfilledOrder> {
    var url = `${this.url}/fulfill`;
    return this.http.post<FulfilledOrder>(url, ordersForFulfillment);
  }

  getAllFulfillOrder(): Observable<FulfilledOrder[]> {
    return this.http.get<FulfilledOrder[]>(this.url);
  }

  getDateFulfilledById(
    orderForFulfillmentId: Number
  ): Observable<FulfilledOrder[]> {
    var url = `${this.url}/${orderForFulfillmentId}`;
    return this.http.get<FulfilledOrder[]>(url);
  }
}
