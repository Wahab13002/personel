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
    name: new FormControl(''),
    subject: new FormControl('')
  });
  ngOnInit() {
  }

  onsubmit() {
    console.log('0');
    fetch('https://formspree.io/f/mleaoywb', {
      method: 'POST',
      body: JSON.stringify(this.myform.value),
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
        console.log(1);
        this.myform.reset();
    }).catch(error => {
      console.log('2');
    });


  }

}
