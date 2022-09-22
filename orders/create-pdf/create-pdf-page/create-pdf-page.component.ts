import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Address } from 'src/app/address/address';
import { AddressService } from 'src/app/address/address.service';
import { OrdersPageService } from 'src/app/orders-page/orders-page.service';

@Component({
  selector: 'app-create-pdf-page',
  templateUrl: './create-pdf-page.component.html',
  styleUrls: ['./create-pdf-page.component.css'],
})
export class CreatePdfPageComponent implements OnInit {
  pageHeight!: Number;
  newPageHeight!: Number;

  orderAddress: any[] = [];
  address: Address[] = [];

  addressId!: String;

  @ViewChild('pdfPrint') element!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private ordersPageService: OrdersPageService,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    // AddressId is passed
    this.addressId = this.route.snapshot.params['id'];
    console.log(`this.addressid = ${this.addressId}`);
    //this.orderId = 3 // for debugging

    // I assume getSellerOrder grabs all orders based on seller id
    // this.getOrderBySeller(orderId);
    // this.getAddressByOrder(orderId);

    this.getAddress(this.addressId);

    // this.address.forEach((element) => {
    //   if (element.id == this.addressId) {
    //     console.log(`it worked`);
    //     this.orderAddress.push(element);
    //   }
    // });
  }

  getOrderBySeller(id: number) {
    // this.ordersPageService.getSellerOrders(id).subscribe(orders => this.orders = orders);
  }

  getAddress(addressId: String) {
    this.addressService
      .getOrderAddressById(this.addressId)
      .subscribe((address) => {
        this.address.push(address);
      });
  }

  createManifest(){
    // let pdf = new jsPDF('l', 'pt', 'a4');
    // var width = pdf.internal.pageSize.getWidth();
    // var height = pdf.internal.pageSize.getHeight();

    
  }

  createPdf() {
    let pdf = new jsPDF('l', 'pt', 'a4');
    var width = pdf.internal.pageSize.getWidth();
    var height = pdf.internal.pageSize.getHeight();

    // Higher Value = Higher Quality = Larger File
    const quality = 2;
    html2canvas(this.element.nativeElement, { scale: quality }).then(
      (canvas) => {
        // const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(
          canvas.toDataURL('image/jpeg', 1.0),
          'JPEG',
          0,
          0,
          width,
          height
        );
        // pdf.save('testingtesting.pdf');
        window.open(pdf.output('bloburl'), 'orders/create-pdf-page/:id');
      }
    );
  }
}
