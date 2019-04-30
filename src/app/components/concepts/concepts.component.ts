import { Component, OnInit, ViewChild } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {

  loggedInUser: string="";

  @ViewChild (CebComponent) cebData;


  constructor() { }

  ngOnInit() {
  }
  

  onprofileLoadedHnadler(msgFromChild){
    this.loggedInUser=msgFromChild;
  }

  ngAfterViewInit(){
    console.log("Inside");
    console.log(this.cebData);

  }
}
