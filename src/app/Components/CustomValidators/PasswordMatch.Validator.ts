import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';


// Cross-field custom validator
// if validator has parameters
// i use factory function for return function from another function

// export function PasswordMatch():ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     let passControl = control.get('password');
//     let confirmPassControl = control.get('confirmPassword');
//     if (!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value) {

//       return null
//     }
//     let valErr={'UnMatchedPassword' : {'pass':passControl?.value,'confirm':confirmPassControl?.value}}
//     return (passControl?.value === confirmPassControl?.value) ? null: valErr
// }
// }

// if validator has no parameters
export const PasswordMatch:ValidatorFn =
  (control: AbstractControl): ValidationErrors | null => {
    // console.log("error");
    let passControl = control.get('password');
    let confirmPassControl = control.get('confirmPassword');
    if (!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value) {
      // console.log("error1")
      return null;

    }
     let valErr = { 'UnMatchedPassword': { 'pass': passControl?.value, 'confirm': confirmPassControl?.value } }
    //  console.log(valErr)
    return (passControl?.value === confirmPassControl?.value) ? null: valErr
}
