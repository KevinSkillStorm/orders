import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Address } from 'src/app/address/address';
import { FulfilledOrderComponent } from 'src/app/fulfilled-order/fulfilled-order/fulfilled-order.component';
import { FulfilledOrderService } from 'src/app/fulfilled-order/fulfilled-order.service';
import { OrderStatusService } from 'src/app/order-status/order-status.service';
import { OrderForFulfillment } from '../orders-page';
import { OrdersPageService } from '../orders-page.service';
import { AddressService } from 'src/app/address/address.service';

@Component({
  selector: 'app-orders-placed-view',
  templateUrl: './orders-placed-view.component.html',
  styleUrls: ['./orders-placed-view.component.css'],
})
export class OrdersPlacedViewComponent implements OnInit {
  address: Address[] = [];
  orders: OrderForFulfillment[] = [];

  fulfilledOrderForm!: FormGroup;
  updateOrderForFulfillmentForm!: FormGroup;

  constructor(
    private route: Router,
    private addressService: AddressService,
    private fullfilledOrderService: FulfilledOrderService,
    private orderStatusService: OrderStatusService,
    private ordersPageService: OrdersPageService
  ) {}


  ngOnInit(): void {
    this.getSellerOrder(1);
  }
  getSellerOrder(id: number) {
    // TODO: Gets orders by seller... for now it just gets all orders without seller's id and auth

    forkJoin(this.ordersPageService.getPendingOrders(id)).subscribe(
      ([orders]) => {
        this.orders = orders;
        orders.forEach((element) => {
          this.addressService
            .getOrderAddressById(element.addressId)
            .subscribe((address) => {
              this.address.push(address);
            });
        });
      }
    );
  }

  fulfill(orders: OrderForFulfillment) {
    // Creates forms to:
    // 1) Update OrderForFulfillment to update OrderStatus.Pending -> OrderStatus.Fulfilled
    // 2) Add the order to Fulfilled Order by posting

    // this.fulfilledOrderForm = new FormGroup({
    //   orderForFulfillmentId: new FormControl(
    //     `${orders.orderForFulfillmentId}`,
    //     Validators.required
    //   ),
    //   orderId: new FormControl(`${orders.orderId}`, Validators.required),
    //   itemId: new FormControl(`${orders.itemId}`, Validators.required),
    //   quantity: new FormControl(`${orders.quantity}`, Validators.required),
    //   fulfillmentDate: new FormControl(Date.now(), Validators.required),
    // });

    // this.updateOrderForFulfillmentForm = new FormGroup({
    //   orderForFulfillmentId: new FormControl(
    //     `${orders.orderForFulfillmentId}`,
    //     Validators.required
    //   ),
    //   orderId: new FormControl(`${orders.orderId}`, Validators.required),
    //   userName: new FormControl(`${orders.userName}`, Validators.required),
    //   addressId: new FormControl(`${orders.addressId}`, Validators.required),
    //   orderDate: new FormControl(`${orders.orderDate}`, Validators.required),
    //   itemId: new FormControl(`${orders.itemId}`, Validators.required),
    //   itemTitle: new FormControl(`${orders.itemTitle}`, Validators.required),
    //   imageSrc: new FormControl(`${orders.imageSrc}`, Validators.required),
    //   quantity: new FormControl(`${orders.quantity}`, Validators.required),
    //   status: new FormControl(`Fulfilled`, Validators.required),
    // });

    // forkJoin(
    //   // Creates a new FulfilledOrder record where we populate it
    //   // with the current order record we just clicked to 'fulfill'
    //   this.fullfilledOrderService.fulfillOrder(this.fulfilledOrderForm.value),
    //   this.ordersPageService.updateOrderStatus(
    //     orders.orderForFulfillmentId,
    //     this.updateOrderForFulfillmentForm.value
    //   )
    // ).subscribe(([]) => {});

    this.route.navigateByUrl(`orders/create-pdf-page/${orders.addressId}`);
  }

  // TODO: We need to ensure taht the order's address is found by comparing
  //       the guid from the 'AddressId' and matching this guid with 'Id' from Address entity
  //
  // NOTES:
  // - guid references to adress to addresing order
  // 	- all address ojbect is passed on for forntend to utilize
  // 	 	- they added guid id address
  getSpecificAddress(addressId: String): String {
    var specificAddress: String = 'No Address Found';

    this.address.forEach((addressElement) => {
      if (addressId == addressElement.id) {
        specificAddress = `${addressElement.lineOne}, ${addressElement.city} , ${addressElement.state} , ${addressElement.zip} , ${addressElement.country}`;
      }
    });

    return specificAddress;
  }

  // TODO: before rerouting to pdf page, get order fulfillment by id, pass guid id, subscribe method getById after clicking fulfill button
  // inside, we bind things.
}
