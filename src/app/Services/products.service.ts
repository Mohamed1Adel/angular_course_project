import { APIResponseVM } from './../Models/apiresponse-vm';
import { environment } from './../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


import { Iproducts } from '../Models/iproducts';
import { retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

     httpOptions;
  constructor(private httpClint: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    }
  }


    private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
        console.log("Errooooor")
  // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));



  }


  getAllproducts() :Observable<Iproducts[]>{
    return this.httpClint.get<Iproducts[]>(`${environment.APIURL}/products`);
    // return this.genericApiHandler.getAll("/products").pipe(
    //   map((ApiResponse: APIResponseVM) => {
    //     return ApiResponse.data
    //   })
    // )

  }
  getProductByCatId(CatId:number) :Observable<Iproducts[]>{
    return this.httpClint.get<Iproducts[]>(`${environment.APIURL}/products?categoryID=${CatId}`);
  }
  getProductById(prdId: number):Observable<Iproducts> {
    return this.httpClint.get<Iproducts>(`${environment.APIURL}/products/${prdId}`)
  }

  addProduct(newPrd:Iproducts):Observable<Iproducts> {
    // return this.httpClint.post<Iproducts>(`${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOptions).pipe(
    //   retry(2),
    //   catchError((err:HttpErrorREsponse) => {
    //     console.log(err.status , err.error)
    //     return throwError(()=> new Error(err.error))
    //   })
    return this.httpClint.post<Iproducts>(`${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    )

  }
}
