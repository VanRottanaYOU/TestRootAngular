import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { environment} from '../../environments/environment';

import { Observable} from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceGenService<T> {
  private isIdentifier = false;
/**
 * 
 * @param httpclient injection lié au module app.module
 * @param router  injection lié à core-rooting.module
 */
  constructor(private httpclient:HttpClient,private router:Router) {}

 
  getListT(name : string) :Observable<T[]> {
    return this.httpclient.get<T[]>(environment.apiUrl+"/"+name);
  } 

    canActivate(): boolean {
    return this.isIdentifier;
  }

/**
 * 
 * @param data Donnée <T>
 * @param url  dépendant 
 */
putT(data,name:string, id:number) {

    this.httpclient.put(environment.apiUrl+"/"+name+"/"+id,
            data)
            .subscribe(
                data => {
                    console.log("PUT Request is successful ", data);
                },
                error => {
                    console.log("Rrror", error);
                }
            );  
       }

/**
 * Créer un utlisateur
 * @param user 
 */
postT(data,name:string) {
  this.httpclient.post(environment.apiUrl+"/"+name,
          data)
          .subscribe(
              data => {
                  console.log("POST Request is successful ", data);
              },
              error => {
                  console.log("Rrror", error);
              }
          );  
     }

/**
 * Suppression d'un utilisateur 
 * @param id 
 */
deleteT (id: number,name:string) : void {
  
  this.httpclient.delete(environment.apiUrl+"/"+name)
    .subscribe(              error => {
      console.log("Rrror", error);
  }
);
}

/**
 * Gestion des erreurs
 * @param error 
 */

     private handleError(error: HttpErrorResponse | any) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return Observable.throw(
        'Something bad happened; please try again later.');
    };
}
