import { Observable } from 'rxjs';
import { ProductsService } from './../../../Services/products.service';
import { StaticProductsService } from './../../../Services/static-products.service';
import { Cartvm } from './../../../Models/cartvm';
import { Icategory } from './../../../Models/icategory';
import { Iproducts } from './../../../Models/iproducts';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [
    // StaticProductsService
  ]
})
export class ProductListComponent implements OnChanges, AfterViewInit{

  // catList: Icategory[];
  // prdList: Iproducts[];
  prdListOfCat: Iproducts[]=[];
  selectedCategoryId: number = 0;
  orderTotalPrice: number = 0;
  isSpecial: boolean = true;
  orderDate: Date;

  @Input() sentCatId: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;
  // @Output() totalPriceChanged: EventEmitter<number> = new EventEmitter<number>;
  @Output() buyPrd: EventEmitter<Cartvm>;
  @Output() masterCount: EventEmitter<number>;
  @ViewChild("itemsPrdCount") itemsCount!: ElementRef;
  @ViewChild("itemsMasterCount") masterItems!: ElementRef;

  // @Input() items = 0;
  constructor(private staticProductsService:StaticProductsService , private router:Router,private prdService:ProductsService) {
    this.totalPriceChanged = new EventEmitter<number>;
    this.buyPrd = new EventEmitter<Cartvm>;
    this.masterCount = new EventEmitter<number>;
    // this.prdList = [
    //   { id: 100, name: 'lenovoThinkPad', price: 1000, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
    //   { id: 200, name: 'Apple macbook laptop', price: 56500, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
    //   { id: 300, name: 'Lenovo |Tap 3', price: 3080, quantity: 10, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
    //   { id: 400, name: 'Samsung Tap', price: 8578, quantity: 2, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
    //   { id: 500, name: 'Samsung NOte 10', price: 10028, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 },
    //   { id: 600, name: 'Samsung S22 Ultra', price: 2575, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 },
    // ];
    // this.prdListOfCat = this.prdList;
    this.orderDate = new Date();
  }
    ngAfterViewInit(): void {
      throw new Error('Method not implemented.');
    }
  ngOnChanges(): void {
    // this.filterProdouctsBuCatId()
    // this.prdListOfCat=this.staticProductsService.getProductsBtCatId(this.sentCatId)

    this.prdService.getProductByCatId(this.sentCatId).subscribe(products => {
       this.prdListOfCat = products
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.prdListOfCat = this.staticProductsService.getAllProducts();
        this.prdService.getAllproducts().subscribe(products => {
          this.prdListOfCat = products
          console.log("connected api")
    })

  }
  buy(prdPrice: number, count: any,i:number)
  {
    // let totalPrice: number = count * 10;
    // let itemsCount: number;
    // itemsCount = parseInt(count);
    // itemsCount = Number(count);
    // itemsCount = count as number;
    // itemsCount = +count + 10;
    // this.orderTotalPrice = parseInt(count) * prdPrice;
    // this.orderTotalPrice = Number(count) * prdPrice;
    // this.orderTotalPrice = count as number * prdPrice;
    this.orderTotalPrice += +count * prdPrice;
    // this.itemsCount = count;
    // console.log(this.itemsCount);
    // console.log(this.items)
    // console.log(count)
    // this.masterItems.nativeElement.value = count;
    // this.masterCount.emit(count);


    //Execute Event
    this.totalPriceChanged.emit(this.orderTotalPrice);
    // this.buyPrd.emit(this.prdList[i]);
    // if (this.prdList[i] === this.prdList[i]) {

    //   this.masterCount.emit(this.fldCount);
    // }

  }
  // private filterProdouctsBuCatId() {
  //   if (this.sentCatId == 0)
  //     this.prdListOfCat=this.prdList
  //   else
  //     this.prdListOfCat= this.prdList.filter(prd=>prd.categoryID==this.sentCatId)

  // }
  // change() {
  //   this.selectedCategoryId = 1;
  // }
  trackByFunc(index: number, prd: Iproducts) :number {
    return prd.id;
  }
  openPrdDetails(prdID:number) {
    this.router.navigate(['/Products',prdID]) // naviget([path,param1,param21,...etc])
  }
}









// import { Cartvm } from './../../../Models/cartvm';
// import { Icategory } from './../../../Models/icategory';
// import { Iproducts } from './../../../Models/iproducts';
// import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnChanges, AfterViewInit{

//   // catList: Icategory[];
//   prdList: Iproducts[];
//   prdListOfCat: Iproducts[]=[];
//   selectedCategoryId: number = 0;
//   orderTotalPrice: number = 0;
//   isSpecial: boolean = true;
//   orderDate: Date;

//   @Input() sentCatId: number = 0;
//   @Output() totalPriceChanged: EventEmitter<number>;
//   // @Output() totalPriceChanged: EventEmitter<number> = new EventEmitter<number>;
//   @Output() buyPrd: EventEmitter<Cartvm>;
//   @Output() masterCount: EventEmitter<number>;
//   @ViewChild("itemsPrdCount") itemsCount!: ElementRef;
//   @ViewChild("itemsMasterCount") masterItems!: ElementRef;

//   // @Input() items = 0;
//   constructor() {
//     this.totalPriceChanged = new EventEmitter<number>;
//     this.buyPrd = new EventEmitter<Cartvm>;
//     this.masterCount = new EventEmitter<number>;
//     this.prdList = [
//       { id: 100, name: 'lenovoThinkPad', price: 1000, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
//       { id: 200, name: 'Apple macbook laptop', price: 56500, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
//       { id: 300, name: 'Lenovo |Tap 3', price: 3080, quantity: 10, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
//       { id: 400, name: 'Samsung Tap', price: 8578, quantity: 2, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
//       { id: 500, name: 'Samsung NOte 10', price: 10028, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 },
//       { id: 600, name: 'Samsung S22 Ultra', price: 2575, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 },
//     ];
//     this.orderDate = new Date();
//     this.prdListOfCat = this.prdList;
//   }
//   ngAfterViewInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   ngOnChanges(): void {
//     this.filterProdouctsBuCatId()
//   }
//   buy(prdPrice: number, count: any,i:number)
//   {
//     // let totalPrice: number = count * 10;
//     // let itemsCount: number;
//     // itemsCount = parseInt(count);
//     // itemsCount = Number(count);
//     // itemsCount = count as number;
//     // itemsCount = +count + 10;
//     // this.orderTotalPrice = parseInt(count) * prdPrice;
//     // this.orderTotalPrice = Number(count) * prdPrice;
//     // this.orderTotalPrice = count as number * prdPrice;
//     this.orderTotalPrice += +count * prdPrice;
//     // this.itemsCount = count;
//     // console.log(this.itemsCount);
//     // console.log(this.items)
//     // console.log(count)
//     // this.masterItems.nativeElement.value = count;
//     // this.masterCount.emit(count);


//     //Execute Event
//     this.totalPriceChanged.emit(this.orderTotalPrice);
//     this.buyPrd.emit(this.prdList[i]);
//     // if (this.prdList[i] === this.prdList[i]) {

//     //   this.masterCount.emit(this.fldCount);
//     // }

//   }
//   private filterProdouctsBuCatId() {
//     if (this.sentCatId == 0)
//       this.prdListOfCat=this.prdList
//     else
//       this.prdListOfCat= this.prdList.filter(prd=>prd.categoryID==this.sentCatId)

//   }
//   // change() {
//   //   this.selectedCategoryId = 1;
//   // }
//   trackByFunc(index: number, prd: Iproducts) :number {
//     return prd.id;
//   }
// }
