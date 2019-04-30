import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styles: []
})
export class StringInterpolationComponent implements OnInit {


  appName: string = "Phone-Book-App";
  year = 2019;

  skillset: any[] = [
    'html', 'java'
  ]

  myProfile: object = {
    name: 'arun',
    exp: 12,
  }

  add(a, b) {
    return a + b;
  }

  constructor() { }

  ngOnInit() {
  }

}
