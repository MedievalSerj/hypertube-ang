import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { MyValidators } from '../common/validators/my.validators'
import {AuthService} from '../services/auth.service';
import {GlobalVariable} from '../global';


@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {
  form;
  img_url = 'assets/dummy_avatar.png';
  current_user: any;


  constructor(fb: FormBuilder,
              private authService: AuthService) {
    this.current_user =  this.authService.currentUser;

    if (this.current_user.avatar_url)
      this.img_url =  GlobalVariable.FLASK_API_URL + this.current_user.avatar_url;

    this.form = fb.group({
      avatar64: [null],
      login: [this.current_user.login, [
        Validators.required,
        Validators.minLength(3),
        MyValidators.cannotContainSpecial,
        MyValidators.maxLenthReached
      ]],
      first_name: [this.current_user.first_name, [
        Validators.required,
        Validators.minLength(2),
        MyValidators.onlyLetters
      ]],
      last_name: [this.current_user.last_name, [
        Validators.required,
        Validators.minLength(2),
        MyValidators.onlyLetters
      ]],
      email: [this.current_user.email, [MyValidators.myEmail]],
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
