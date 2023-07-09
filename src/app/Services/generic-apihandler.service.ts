// import { APIResponseVM } from './../Models/apiresponse-vm';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class GenericAPIHandlerService {


//     httpOptions;
//   constructor(private httpClint: HttpClient) {
//     this.httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type' : 'application/json',
//       })
//     }
//   }


//     private handleError(error: HttpErrorResponse) {
//   if (error.status === 0) {
//     // A client-side or network error occurred. Handle it accordingly.
//     console.error('An error occurred:', error.error);
//   } else {
//     // The backend returned an unsuccessful response code.
//     // The response body may contain clues as to what went wrong.
//     console.error(
//       `Backend returned code ${error.status}, body was: `, error.error);
//   }
//         console.log("Errooooor")
//   // Return an observable with a user-facing error message.
//     return throwError(() => new Error('Something bad happened; please try again later.'));



//   }



//   getAll() :Observable<APIResponseVM>{

//   }

//   search(searchItems: string[]) :Observable<APIResponseVM>{

//   }

//   getById(id: number) :Observable<APIResponseVM>{

//   }

//   post(newObject: any) :Observable<APIResponseVM>{

//   }

//   put(id: number, newObject: any) :Observable<APIResponseVM>{

//   }
//   delete(id: number) :Observable<APIResponseVM>{

//   }
// }
