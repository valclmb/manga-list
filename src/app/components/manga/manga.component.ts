import {Component, Input, OnInit} from '@angular/core';
import {Manga} from '../../models/Manga';
import {CRUDService} from "../../services/crud.service";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {

  @Input() manga!: Manga

  isShow = false;
  constructor(private cS: CRUDService, private router: Router) { }

  ngOnInit(): void {
  }

  showIcons(): void{
    this.isShow = true;
  }
  hideIcons() {
    this.isShow = false;
  }

  delete() {
    this.cS.delete(this.manga.id, environment.apiUrl + '/mangas').subscribe(r => location.reload())

  }

}
