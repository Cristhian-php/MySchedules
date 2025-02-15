import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }

   logoutUser(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(()=>{
           console.log("Log Out feito!");
           resolve();
          }).catch((error) => {
            reject();
          })
       }
     })
   }

   userDetails(){
     return firebase.auth().currentUser;
   }
}
