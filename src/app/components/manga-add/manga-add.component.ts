import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CRUDService} from "../../services/crud.service";
import {Manga} from '../../models/Manga';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-manga-add',
  templateUrl: './manga-add.component.html',
  styleUrls: ['./manga-add.component.css']
})
export class MangaAddComponent implements OnInit {

  url =  environment.apiUrl + '/mangas';
  myForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private cS: CRUDService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        name:['', Validators.required],
        imgUrl:['', Validators.required],
        isRead:['',],
        isStart:['',],
        isOver:['',],
      }
    )

  }
  addManga(){
    let isRead = this.myForm.value.isRead;
    let isStart = this.myForm.value.isStart;
    let isOver = this.myForm.value.isOver;

    if(isRead === "") this.myForm.value.isRead = false;
    console.log(isStart)
    isStart === true ? this.myForm.value.isStart = "no": this.myForm.value.isStart = "yes";
    if(isOver === "") this.myForm.value.isOver = false;

    console.log(this.myForm.value)
    if (this.myForm.valid){
      this.cS.add<Manga>(this.myForm.value).subscribe(r => location.reload());

    }
  }

}
