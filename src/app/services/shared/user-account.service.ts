import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
//Step 1Creatng BehaviourSubject with default value
  private uaserProfile = new BehaviorSubject<string>("Arun");

  //Step 2: Creatng Observable for BehaviourSubject so anyone can subscribe it
  latestUserProfile = this.uaserProfile.asObservable();




  constructor() { }

  updateProfleName(newName:string){
    console.log(newName);
    this.uaserProfile.next(newName);
  }
}
