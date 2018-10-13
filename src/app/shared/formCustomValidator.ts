import { FormControl, Validators } from '@angular/forms';

const validCharacters = /[^\s\w,.:&\/()+%'`@-]/;
const validEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export class CustomValidators extends Validators {
  static validateEmailCharacters(control: FormControl) {
    if (control.value && control.value.length > 0) {
      const matches = control.value.match(validEmail);
      return matches && matches.length ? { invalid_characters: matches } : null;
    } else {
      return null;
    }
  }
}
