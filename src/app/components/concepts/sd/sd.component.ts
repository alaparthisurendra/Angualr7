import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styles: []
})
export class SdComponent implements OnInit {

  constructor() { }

  navMenus: Array<string> = [
    'java', 'html', '.net'
  ]

  
  

  ngOnInit() {
  }
isLoggedIn: boolean=true;
}
