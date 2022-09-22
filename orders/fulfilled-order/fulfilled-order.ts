export interface FulfilledOrder {
  orderForFulfillmentId: Number;
  orderId: String;
  itemId: String;
  quantity: Number;
  fulfillmentDate: Date;
}
