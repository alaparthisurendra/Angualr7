import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/services/shared/user-account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  details: string="jffffffffffffffffffffffffffhhhhhhhhhhhhhhhhhf";

  profileSubscription: Subscription
  newName:string ="Arun";
  profileName:string;

  birthday = new Date(1983, 3, 15);

  constructor(private userAccountService : UserAccountService) {
    this.profileSubscription = this.userAccountService.latestUserProfile.subscribe(value => {

  
      console.log(value);
      this.profileName = value;
   });
  }

  ngOnInit() {
  }

  updateNameHandler(){
    console.log(this.newName);
    //send new name to common shared service
    this.userAccountService.updateProfleName(this.newName);
  }
}
