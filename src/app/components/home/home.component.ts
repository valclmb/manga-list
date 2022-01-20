import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  addIsOpen = false;
  notSubmit!:boolean;
  isConnect = localStorage.getItem('isConnected');
  constructor() { }

  ngOnInit(): void {
  }


  isClose($event: any) {
    this.notSubmit = $event
    this.addIsOpen = $event
    setTimeout(() => this.notSubmit = true, 5000)
  }

  isConnected() {
    let ls = localStorage.getItem("isConnected")

  }

  deconnection() {
    localStorage.clear()
    location.reload()
  }
}
