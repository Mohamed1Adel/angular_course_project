import { Iproducts } from './../../../Models/iproducts';
import { StaticProductsService } from './../../../Services/static-products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currPrdID: number = 0;
  prd: Iproducts | null = null;
  prdIDsList: number[]=[];
  constructor(private activatedRoute:ActivatedRoute , private prdService:StaticProductsService,private location:Location , private router:Router) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
        // this.currPrdID = Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    // console.log(this.currPrdID);
    // this.prd = this.prdService.getProductById(this.currPrdID);
    this.prdIDsList = this.prdService.getPrdIds();
    this.activatedRoute.paramMap.subscribe((partamMab) => {
      this.currPrdID = Number(partamMab.get('pid'));
      this.prd = this.prdService.getProductById(this.currPrdID);
    })
  }


  prevPrd() {
    let currentIndex = this.prdIDsList.findIndex(ele => ele == this.currPrdID);
    // console.log(currentIndex);\
          // let prevPrdId = this.prdIDsList[currentIndex - 1];
    let prevPrdID;
    if (currentIndex > 0) {
      prevPrdID = this.prdIDsList[currentIndex - 1];
      this.router.navigate(['/Products',prevPrdID])
    }

  }
  goBack() {
    this.location.back();
  }

  nextPrd() {
    let currentIndex = this.prdIDsList.findIndex(ele => ele == this.currPrdID);
    // console.log(currentIndex);\
          // let prevPrdId = this.prdIDsList[currentIndex - 1];
    let nextPrdID;
    if (currentIndex < this.prdIDsList.length) {
      nextPrdID = this.prdIDsList[currentIndex + 1];
      this.router.navigate(['/Products',nextPrdID])
    }

  }
}
