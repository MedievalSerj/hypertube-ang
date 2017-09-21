import {Component} from '@angular/core';
import {Validators, FormBuilder, AbstractControl, ValidationErrors} from '@angular/forms';
import {MyValidators} from '../common/validators/my.validators';
import {ValidationService} from '../services/validation.service';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  form;

  constructor(fb: FormBuilder, private validationService: ValidationService) {
    this.form = fb.group({
      login: ['',
        [Validators.required,
        Validators.minLength(3),
        MyValidators.cannotContainSpecial,
        MyValidators.maxLenthReached],
        [
          this.loginOccupied.bind(this)
        ]
      ],
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

  loginOccupied(control: AbstractControl) : Promise<ValidationErrors | null> {
    return new Promise(((resolve, reject) => {
      this.validationService.readOne(control.value)
        .subscribe(response => {
          console.log(response);
          if (response['user_exists'] === true) {
            console.log('bp_11');
            resolve({loginOccupied: true});
          }
          resolve(null);
        });
    }));
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
