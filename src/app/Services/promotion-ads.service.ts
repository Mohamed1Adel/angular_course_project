import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  adsList: string[];
  constructor() {
    this.adsList = ["Big Discounts",
      "sale up to 50%",
      "check our white Friday Offres",
      // "",
      "special white Friday offers up to 70%"

    ];

  }

  getSchadualAds(intarevalSeconds:number):Observable<string>{
    return new Observable((observer) => {

      let counter = 0;
      let adsTimer = setInterval(() => {
        console.log("in interval");
  // observer.next();
      // observer.complete();
      // observer.error();

      if (counter == this.adsList.length) {
        observer.complete();

      }
      if (this.adsList[counter] == "") {
        observer.error("Error : Empty Ad...");
      }
      observer.next(this.adsList[counter]);
      counter++;
      }, intarevalSeconds * 1000);
      return {
        unsubscribe() {
          clearInterval(adsTimer);
          console.log("Ins Obs Unsubscribe")
        }
      }
    });
  }


  // getSerialAds(): Observable<string>{

  //   return of("ad1" , "ad2", "ad3");
  //   // return from(this.adsList);
  // }

}

