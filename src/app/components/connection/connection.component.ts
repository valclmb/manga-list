import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  myForm!:FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        name:['',Validators.required],
        password:['',Validators.required]
      }
    )
  }

  onSubmit(): void{
    let value = this.myForm.value
    if (this.myForm.valid){
      if(value.name === environment.name
        && value.password === environment.password){
        localStorage.setItem('isConnected', "yes")
        this.router.navigateByUrl('')
      }
    }
  }
}
