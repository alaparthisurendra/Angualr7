import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from 'src/app/services/contact-service.service';
import { Icontact } from 'src/app/interface/icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {
  contactList: Icontact[];
  submissionStatus: string;

  constructor(private contactservice : ContactService) {

    console.log("Inside conatcs Constructor");
   }

  ngOnInit() {
    console.log("Inside init method");
    
    this.contactservice.getContacts()
    .subscribe ( (resp: Icontact[]) => {
      console.log("resp", resp);
      if(resp && resp.length>0){
        this.contactList=resp;
    }
    });
    
  }
  
  }

