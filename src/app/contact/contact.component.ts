import { Component, OnInit } from '@angular/core';
import {
  
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  myform: FormGroup = new FormGroup({
    email: new FormControl(''),
    message: new FormControl(''),
  });;
  email: FormControl ;
  message: FormControl;
  ngOnInit() {
  }

  onsubmit() {



    

    console.log('...')
      console.log('0')
    fetch("//formspree.io/f/mleaoywb", {
      method: 'POST',
      body: this.myform.toString(),
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
        console.log('1')
      this.myform.reset()
    }).catch(error => {
      console.log('2')
    });
        

  }

}