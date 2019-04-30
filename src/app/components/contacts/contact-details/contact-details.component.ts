import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact-service.service';
import { Icontact } from 'src/app/interface/icontact';
import { ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {
  contactId: number;
  contactData: Icontact;
  editableContactData: Icontact;
updatestatus: string;
  constructor(private activatedRoute: ActivatedRoute, private contactservice: ContactService ) {
    this.activatedRoute.params.subscribe(params => {
      this.contactId = params['id'];
      console.log(this.contactId);
    });
  }

  ngOnInit() {
    this.contactservice.getContactsById(this.contactId)
    .subscribe((resp: Icontact) => {
      this.contactData = resp;
    });
  }
editmodelclickhandler() {
$('#exampleModal').modal('show');
this.editableContactData = JSON.parse(JSON.stringify(this.contactData));
}

onUpdateHandler() {
  this.contactservice.updateContact(this.editableContactData)
  .subscribe((resp: Icontact) => {
    this.contactData = resp;
    this.updatestatus = 'updated succesfully';

    setTimeout(() => {
      $('#exampleModal').modal('hide');
    }, 3000);
  });

}
}
