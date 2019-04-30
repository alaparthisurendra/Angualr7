import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styles: [
    `
    .red{
      color: red;
    }
    .green{
      color: green;
    } 
  `

  ]
})
export class PropertyBindingComponent implements OnInit {

  appName: string="Property Bindings ";
  isLoggedIn: boolean=false;

  constructor() { }

  ngOnInit() {
  }
loginHandler(){
  this.isLoggedIn=!this.isLoggedIn;
}
}
