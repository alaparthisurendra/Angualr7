import { Component, OnInit , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  constructor() { }
  @Output() profileLoaded=new EventEmitter<String>();

  //example for@ViewChild--concepts.comp.ts
  skills: String[]=['html','css'];
  ngOnInit() {
  }
  sendDataToParent()
  {
    debugger;
    this.profileLoaded.emit("arun");
  }
}
