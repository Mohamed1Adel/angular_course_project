import { PromotionAdsService } from './../../Services/promotion-ads.service';
import { StoreData } from './../../ViewModels/store-data';
import { Component, OnInit } from '@angular/core';
import { catchError, filter, map, retry, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newName?:String = "kjgkl";
  private subscriptions!: Subscription[];
  storeInfo: StoreData;
  isImageShown = true;
  constructor(private promoAds:PromotionAdsService) {
    this.storeInfo = new StoreData("ITI Store", 'https://picsum.photos/350/200',['Cairo' , 'Alex' , 'Qena'])
  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  // first way
  // let observer = {
  //   next: (data: string) => {
  //     console.log(data)
  //   },
  //   error: (err: string) => {
  //     console.log(err)
  //   },
  //   complete: () => {
  //           console.log("ads finshid")

  //   }
  // };
  // this.promoAds.getSchadualAds(3).subscribe(observer);

  // // secound way
  //  let subscription:Subscription = this.promoAds.getSchadualAds(3).subscribe({
  // //  this.subscription= this.promoAds.getSchadualAds(3).subscribe({
  //   next: (data: string) => {
  //     console.log(data)
  //   },
  //   error: (err: string) => {
  //     console.log(err)
  //   },
  //   complete: () => {
  //           console.log("ads finshid")

  //   }
  // });

  // this.subscriptions.push(subscription);

let observer = {
  //  this.subscription= this.promoAds.getSchadualAds(3).subscribe({
    next: (data: string) => {
      console.log(data)
    },
    error: (err: string) => {
      console.log(err)
    },
    complete: () => {
            console.log("ads finshid")

    }
};

  let filterObservable = this.promoAds.getSchadualAds(3).pipe(
    filter(ad => ad.includes("white Friday")),
    map(ad => "AD : " + ad),
  );
  // let filterObservable = this.promoAds.getSchadualAds(3).pipe(
  //   retry(3),
  //   catchError ((err):any => { console.log(err) })
  // );
  let adsSubscribtion = filterObservable.subscribe(observer);
  this.subscriptions.push(adsSubscribtion);
  //   // adsSubscription.unsubscribe()

  // to from and of
  // let sub = this.promoAds.getSerialAds().subscribe(ad => {
  //   console.log(ad);
  // })


}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.subscription.unsubscribe();
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }


}




// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   // storeInfo: StoreData;
//   name: string;
//   imageUrl: string;
//   branches: string[];

//   isImageShown :boolean = true;
//   constructor(name:string,  imageUrl:string,  branches:string[]) {
//     // this.storeInfo = new StoreData("ITI Store", 'https://picsum.photos/350/200',['Cairo' , 'Alex' , 'Qena'])'


//     this.name = name;
//     this.imageUrl = imageUrl;
//     this.branches = branches;
//   }
//   toggleImage() {
//     this.isImageShown = !this.isImageShown;
//   }
// }
