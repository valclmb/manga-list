import {Component, OnInit} from '@angular/core';
import {CRUDService} from "../../services/crud.service";
import {Manga} from '../../models/Manga';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {

  menu = [];
  menuSelect = 1;
  manga: Manga[] = [];
  url = environment.apiUrl + '/mangas'

  constructor(private crudService: CRUDService) {
  }

  ngOnInit(): void {

    for (let i =0; i>3; i++){
      let s = sessionStorage.getItem('menu' + [i]);
      // @ts-ignore
      this.menu.push(s);
    }
    this.crudService.findAll<Manga>(`${this.url}`).subscribe(r => this.manga = r)
  }

  menuChange(): void {
    let ss = sessionStorage.getItem('menu');
    if(ss) {
      for (let s of JSON.parse(ss) ){
        if (s.isSelect === true) this.menuSelect = s.id;
      }
    }
    if(this.menuSelect === 1) {
      this.crudService.findAll<Manga>(`${this.url}`).subscribe(r => this.manga = r)
    } else if(this.menuSelect ===2){
      this.crudService.findAll<Manga>(`${this.url}?isRead=no`).subscribe(r => this.manga = r)
    } else if(this.menuSelect === 3){
      this.crudService.findAll<Manga>(`${this.url}?isRead=yes&isOver=no`).subscribe(r => this.manga = r)
    } else if(this.menuSelect === 4 ) {
      this.crudService.findAll<Manga>(`?${this.url}isOver=yes`).subscribe(r => this.manga = r)
    }
  }

}
