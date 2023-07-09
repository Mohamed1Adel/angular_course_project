import { Component, Output, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Cartvm } from 'src/app/Models/cartvm';
import { Icategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements AfterViewInit{
  selectedCatId: number =0;
  catList: Icategory[];
  receivedOrderTotalPrice: number=0;
  masterItems: Cartvm[] = [];
  // count: number=0;

  // Items: Array<any>[] = [];
  // clintNameInputElement: ElementRef = new ElementRef();
  // clintNameInputElement: ElementRef = {} as ElementRef();
  // clintNameInputElement?:ElementRef;
  // clintNameInputElement: ElementRef | undefined = undefined;
  // clintNameInputElement: ElementRef | null = null;
  @ViewChild("customerName") clintNameInputElement!: ElementRef;
  @ViewChild(ProductListComponent) prdListCompObj!: ProductListComponent;
  @ViewChild("itemsMasterCount") itemsMasterCount!: ElementRef;
  @ViewChild(ProductListComponent) itemsPrdCount!: ProductListComponent;

  constructor() {
   this.catList = [
      {id:1,name:"Laptops"},
      {id:2,name:"Tablets"},
      {id:3,name:"Mobiles"},
    ]
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.clintNameInputElement.nativeElement.value = "Your Name Here";
    this.clintNameInputElement.nativeElement.style.border = "2px solid black";


    // console.log(this.prdListCompObj.prdList);
  }
  onTotalPrice(totalPrice: number) {
    this.receivedOrderTotalPrice = totalPrice;
  }
  setCount(count: number) {
    console.log(count);

    // this.itemsMasterCount.nativeElement.value = count
    // this.masterItems
  }

  buyItem(Item: Cartvm) {
    this.masterItems.push(Item);
    // console.log(this.masterItems);

  }

  // completeOrder() {
  //   this.prdListCompObj.prdList[0].quantity -= 1;
  // }
  placeOrder(id: number) {
    // this.prdListCompObj.prdList[index].quantity -= 1;
    // this.prdListCompObj.prdList.forEach((ele) => {
    //   if (ele.id === id) {
    //     ele.quantity -= 1;
    //     // console.log(this.itemsPrdCount.itemsCount);

    //   } else {
    //     return;
    //   }
    // })

  }
}
export { ProductListComponent };

