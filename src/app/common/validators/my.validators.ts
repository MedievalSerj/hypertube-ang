
import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';

export class MyValidators {

  static cannotContainSpecial(control: AbstractControl) : ValidationErrors | null {
    let regexp = new RegExp('^[a-zA-Z0-9_-]+$');
    if (!regexp.test(control.value as string))
      return { cannotContainSpecial: true };
    return null;
  }

  static maxLenthReached(control: AbstractControl) : ValidationErrors | null {
    if (control.value.length > 128 )
      return { maxLenthReached: true };
    return null;
  }

  static onlyLetters(control: AbstractControl) : ValidationErrors | null {
    let regex = new RegExp('^[a-zA-Z]+$');
    if (!regex.test(control.value))
      return { onlyLetters: true };
    return null;
  }

  static myEmail(control: AbstractControl) : ValidationErrors | null {
    let regex = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
    if (!regex.test(control.value))
      return { myEmail: true };
    return null;
  }

  static myPassword(control: AbstractControl) : ValidationErrors | null {
    let regex = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d\\W]{8,30}$');
    if (!regex.test(control.value))
      return { myPassword: true };
    return null;
  }


  static confirmPassword(control: AbstractControl) {

    let passwd =  control.get('passwd').value;
    let confirm_passwd =  control.get('confirm_passwd').value;

    if (passwd !== confirm_passwd)
        return { confirmPassword: true };
    return null;
  }

  static loginExists(control: AbstractControl, service: ValidationService) : Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {

      console.log('bp_1');

      service.readOne(control.value)
      .subscribe(response => {
        console.log(response);
        resolve(null);
      });
    });
  }

}
