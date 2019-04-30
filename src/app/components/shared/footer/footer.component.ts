import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div style = "text-align:center">
  <hr>
 <app-nav>
 <li class="nav-item">
      <a class="nav-link " href="#" tabindex="-1">Back to top</a> 
  </li>
 </app-nav>
 </div>
  <p style=text-align:center> CopyRight @L&T Technology Services</p>
    
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
