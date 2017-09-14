
import {AbstractControl, ValidationErrors} from '@angular/forms';

export class LoginValidators {

  static cannotContainSpecial(control: AbstractControl) : ValidationErrors | null {
    return null;
  }
}
