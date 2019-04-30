import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  submissionStatus : string;

  contactData: {} = {

    fullName: '',
    email: '',
    Phone: ''

  }

  constructor(private ContactServiceService : ContactService) { }

  ngOnInit() {
  }

  addContactHandler(formData) {
    console.log(formData);
    this.ContactServiceService.createContact(formData.value)
    .subscribe ( resp => {
      console.log("resp", resp);
      this.submissionStatus =" Contact added sucessfully";
    });
  }

}
