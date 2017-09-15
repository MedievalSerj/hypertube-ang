import {Component} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import {MyValidators} from '../common/validators/my.validators';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      login: ['',
        [Validators.required,
        Validators.minLength(3),
        MyValidators.cannotContainSpecial,
        MyValidators.maxLenthReached]],
      first_name: ['',
        [Validators.required,
        Validators.minLength(2),
        MyValidators.onlyLetters]],
      last_name: ['',
        [Validators.required,
        Validators.minLength(2),
        MyValidators.onlyLetters]
      ],
      email: ['',
        [MyValidators.myEmail]
      ],
      passwd: ['', [MyValidators.myPassword]],
      confirm_passwd: ['', [Validators.required]],
    }, {validator: MyValidators.confirmPassword});
  }

  get login() {
    return this.form.get('login');
  }

  get first_name() {
    return this.form.get('first_name');
  }

  get last_name() {
    return this.form.get('last_name');
  }

  get email() {
    return this.form.get('email');
  }

  get passwd() {
    return this.form.get('passwd');
  }

  get confirm_passwd() {
    return this.form.get('confirm_passwd');
  }

}
