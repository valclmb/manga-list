import {Component, OnChanges, OnInit} from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  menu = [
    {name:'Tous',id:1,isSelect:true},
    {name:'A lire',id:2, isSelect:false},
    {name:'A jour', id:3, isSelect: false},
    {name:'Lu',id:4,isSelect:false}

  ]
  constructor() { }

  ngOnInit(): void {


  }
  ngOnChanges(): void {

  }

  select($event: any) {
    let targetId =parseInt($event.target.attributes[1].value) ;
    for (let m of this.menu){
      m.isSelect = targetId === m.id;
    }
    sessionStorage.setItem('menu',JSON.stringify(this.menu))
  }

}
