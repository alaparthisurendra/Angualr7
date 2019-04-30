import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: []
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test(e){
    console.log(e);
    alert("Testing");
  }

}
