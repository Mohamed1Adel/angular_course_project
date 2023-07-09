import { Iproducts } from './../Models/iproducts';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  prdList: Iproducts[];

  constructor() {
       this.prdList = [
      { id: 100, name: 'lenovoThinkPad', price: 1000, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
      { id: 200, name: 'Apple macbook laptop', price: 56500, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
      { id: 300, name: 'Lenovo |Tap 3', price: 3080, quantity: 10, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
      { id: 400, name: 'Samsung Tap', price: 8578, quantity: 2, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
      { id: 500, name: 'Samsung NOte 10', price: 10028, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 },
      { id: 600, name: 'Samsung S22 Ultra', price: 2575, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 },
    ];
  }

  getAllProducts():Iproducts[] {
    return this.prdList;
  }


  getProductsBtCatId(cID: number): Iproducts[]{
     if (cID == 0)
      return this.prdList
    else
      return this.prdList.filter( prd => prd.categoryID == cID )

  }
  getProductById(pID: number): Iproducts | null{
    let foundPrd = this.prdList.find(prd => prd.id == pID);
    return foundPrd? foundPrd : null;
  }


  addNewProducts(prd:Iproducts) {
    this.prdList.push(prd);
  }

  getPrdIds(): number[]{
    let prdIDs = this.prdList.map(prd => prd.id);
    return prdIDs;
  }






}
