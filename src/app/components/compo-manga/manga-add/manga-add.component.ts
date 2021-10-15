import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CRUDService} from "../../../services/crud.service";
import {Manga} from '../../../models/Manga';
import {environment} from "../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-manga-add',
  templateUrl: './manga-add.component.html',
  styleUrls: ['./manga-add.component.css']
})
export class MangaAddComponent implements OnInit {

  @Output() isOpenEmit = new EventEmitter;
  url =  environment.apiUrl + '/mangas';
  myForm!: FormGroup;
  isOpen = true;
  isAddMode = true;
  id!: number;
  constructor(private fb: FormBuilder, private cS: CRUDService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.isAddMode = !this.id;

    this.myForm = this.fb.group(
      {
        name:['', Validators.required],
        imgUrl:['', Validators.required],
        isRead:['',],
        isStart:['',],
        isOver:['',],
      }
    )

    if (!this.isAddMode){
      this.cS.findOne<Manga>(this.id,this.url).pipe(first()).subscribe( r => {
        r.isRead ==='yes'? r.isRead = true : r.isRead = false
        r.isStart ==='yes' ? r.isStart = false : r.isStart = true
        r.isOver ==='yes' ? r.isOver = true : r.isOver = false
        this.myForm.patchValue(r)
      })
    }


  }
  onSubmit(){


    let isRead = this.myForm.value.isRead;
    let isStart = this.myForm.value.isStart;
    let isOver = this.myForm.value.isOver;

    isRead === true ? this.myForm.value.isRead = "yes": this.myForm.value.isRead = "no";
    isStart === true ? this.myForm.value.isStart = "no": this.myForm.value.isStart = "yes";
    isOver === true ? this.myForm.value.isOver = "yes": this.myForm.value.isOver = "no";

    if (this.myForm.valid){
      if (this.isAddMode){
        this.isOpen = false;
        this.closeEmit(this.isOpen);
        this.addManga()
      } else {
        this.editManga()
      }

    }
  }

  addManga() {
    this.cS.add<Manga>(this.myForm.value, this.url).subscribe();
  }
  editManga() {
    this.cS.edit(this.id,this.myForm.value,this.url ).subscribe(r => this.router.navigateByUrl('/') );
  }

  closeEmit(value:boolean){
    this.isOpenEmit.emit(value)
  }


}
