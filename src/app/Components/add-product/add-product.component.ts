import { Icategory } from 'src/app/Models/icategory';
import { Router } from '@angular/router';
import { ProductsService } from './../../Services/products.service';
import { Iproducts } from './../../Models/iproducts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  catList: Icategory[];
  newPrd: Iproducts = {} as Iproducts;
  constructor(private prdService: ProductsService,
              private router:Router
  ) {
      this.catList = [
      {id:1,name:"Laptops"},
      {id:2,name:"Tablets"},
      {id:3,name:"Mobiles"},
    ]

  }


  addProduct() {
    // const prd: Iproducts = {
    //   id:23,
    //   name: "new taplet",
    //   price: 3000,
    //   quantity: 999,
    //   imgURL: "",
    //   categoryID:2

    // }

    // this.prdService.addProduct(prd).subscribe((prd) => {
    //   alert("proeuct added successfuly") //not recommended
    //   // Use instead Toast (snackbar)
    //   this.router.navigateByUrl("/Products")
    // });


    const observer = {
      next:(prd:Iproducts) => {
      alert("proeuct added successfuly") //not recommended
      // Use instead Toast (snackbar)
      this.router.navigateByUrl("/Products")
    },
      // error:(err:Error)=>{console.log(err.message)},
      error:(err:Error)=>{alert(err.message)},
    }
    this.prdService.addProduct(this.newPrd).subscribe(observer);
  }
}
