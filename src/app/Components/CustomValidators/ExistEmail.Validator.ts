import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


//Custom Validator


// Sync Validator Function
export function existEmailValidator(existEmails: string[]): ValidatorFn {
  // its not recomended to use thie implementation
  // to send the emeil list
  // Instead , use Async validator tp call spi that takesthe emeil value
  return (control: AbstractControl): ValidationErrors | null => {
    let emailVal: string = control.value;
    let ValidationError = { 'existEmail': { 'value': emailVal } };
    if (emailVal.length == 0 && control.untouched) {
      return null;
    }

    let foundEmail = existEmails.includes(emailVal);
    return foundEmail ? ValidationError : null
    // return (emailVal.includes('@') ? null : ValidationError);
  }
}
