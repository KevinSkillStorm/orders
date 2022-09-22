import { Component, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Address } from 'src/app/address/address';
import { AddressService } from 'src/app/address/address.service';
import { OrderForFulfillment } from 'src/app/orders-page/orders-page';
import { OrdersPageService } from 'src/app/orders-page/orders-page.service';
import { OrdersPlacedViewComponent } from 'src/app/orders-page/orders-placed-view/orders-placed-view.component';
import { FulfilledOrder } from '../fulfilled-order';
import { FulfilledOrderService } from '../fulfilled-order.service';

@Component({
  selector: 'app-fulfilled-order',
  templateUrl: './fulfilled-order.component.html',
  styleUrls: ['./fulfilled-order.component.css'],
})
export class FulfilledOrderComponent implements OnInit {
  address: Address[] = [];
  fulfilledOrders: OrderForFulfillment[] = [];

  constructor(
    private ordersPageService: OrdersPageService,
    private addressService: AddressService,
    private fulfilledOrdersService: FulfilledOrderService
  ) {}

  ngOnInit(): void {
    // ForkJoin does:
    // 1) Get the fulfilled order first before getting the addresses associated
    // 2) populates the fulfilledOrders with all of the orders taht are currently OrderStatus.Fulfilled
    forkJoin(this.ordersPageService.getFulfilledOrders()).subscribe(
      ([orders]) => {
        this.fulfilledOrders = orders;
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

  getSpecificAddress(addressId: String): String {
    var specificAddress: String = 'No Address Found';

    this.address.forEach((addressElement) => {
      if (addressId == addressElement.id) {
        specificAddress = `${addressElement.lineOne}, ${addressElement.city} , ${addressElement.state} , ${addressElement.zip} , ${addressElement.country}`;
      }
    });

    return specificAddress;
  }

  getDateFulfilled(itemId: Number, orderId: String){
    var dateFulfilled!: any;
    // TODO: Ask what colum/property pair would allow us to figure out
    // which fulfilled item belongs to the particular fulfilledorder entity record.
    // For now, I checked if the orderForFulfillmentId are equal and if orderId matches,
    // then we have the accurate record within FulfilledOrder entity and outputed
    // the appropriate order from the cart.

    // pass him order for fulfillment model
    // out of it, adn posts it int ofulfileldorder




    // Don't fulfilled orders table, orderforfulfillment talbe/ eveyr orderfulfillmment and pending. // just
    // fulfilled for every object taht status if fulfilled
    // want date: have to get request to FulfilledOrder table to get date
    //      - talking to syed about: right now, fulfilled orders primary key id is the orderforfulfillmentId
  //        - throwing error because you can't assign id, it wants be able to assign 
  //    WHAT HES DOING: write fulfilledordercontroller // return fuflilled fuflilmentid = (waht ever id you send in)
  //        -  orderforfulfillmentid and return right fulfilled order
  //        - 


  // suggestion ordr3forufllemnt listing and don't worry oabu tdate.
  // 

    // this.fulfilledOrdersService
    //   .getDateFulfilledById(itemId)
    //   .subscribe((fulfilledOrder) => {
    //     fulfilledOrder.forEach((element) => {
    //       if (
    //         +element.itemId == itemId &&
    //         element.orderId == orderId
    //       ) {
    //         dateFulfilled = element.fulfillmentDate;
    //       }
    //     });
    //   });
    // return dateFulfilled;
  }
}
