import {Component, Input, OnInit} from '@angular/core';
import {Manga} from '../../models/Manga';
import {CRUDService} from "../../services/crud.service";
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
    console.log(this.isShow)
  }
  hideIcons() {
    this.isShow = false;
  }

  delete() {
    this.cS.delete(this.manga.id).subscribe(r => location.reload())
  }

  // CHANGE img.mangaImg brightness to 50%
  lessBright($event:any) {
    $event.target.classList.add('brightness');
  }
  moreBright($event:any){
    $event.target.classList.remove('brightness');
  }

  lessBrightH2($event:any) {
    //Go to img.mangaImage and change brightness
    $event.relatedTarget.classList.add('brightness');
  }
  lessBrightEdit($event:any) {
    //Go to img.mangaImage and change brightness
    $event.target.previousSibling.classList.add('brightness');
  }
  // CHANGE img.mangaImg brightness to 50%
}
