export interface OrderForFulfillment {
  // guid herer is ItemId and OrderId
  orderForFulfillmentId: Number;
  orderId: any; // guid
  userName: string;
  addressId: any; // guid
  // Given reference address object
  orderDate: Date;
  itemId: any; // guid
  itemTitle: string;
  imageSrc: string;
  quantity: Number;
  status: string;
}
