import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  form = new FormGroup({
    login: new FormControl('', [Validators.required,
                                Validators.minLength(3)]),
    first_name: new  FormControl('', [Validators.required]),
    last_name: new FormControl(),
    email: new FormControl(),
    passwd: new FormControl(),
    confirm_passwd: new FormControl()
  });

  get login() {
    return this.form.get('login');
  }

  constructor() { }

  ngOnInit() {
  }

}
