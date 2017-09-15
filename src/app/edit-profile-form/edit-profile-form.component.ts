import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { MyValidators } from '../common/validators/my.validators'


@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {
  form;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      login: ['Walt', [
        Validators.required,
        Validators.minLength(3),
        MyValidators.cannotContainSpecial,
        MyValidators.maxLenthReached
      ]],
      first_name: ['Walter', [
        Validators.required,
        Validators.minLength(2),
        MyValidators.onlyLetters
      ]],
      last_name: ['Mitie', [
        Validators.required,
        Validators.minLength(2),
        MyValidators.onlyLetters
      ]],
      email: ['wmitie@student.unit.ua', [MyValidators.myEmail]],
      passwd: ['', [MyValidators.myPassword]],
      confirm_passwd: ['', [Validators.required]]
    }, {validator: MyValidators.confirmPassword});
  }

  get login() {
    return this.form.get('login');
  }

  ngOnInit() {
  }

}
