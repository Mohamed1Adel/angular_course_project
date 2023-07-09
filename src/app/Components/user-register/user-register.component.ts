import { User } from './../../Models/user';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { existEmailValidator } from '../CustomValidators/ExistEmail.Validator';
import { PasswordMatch } from '../CustomValidators/PasswordMatch.Validator';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  existUserEmails: string[] = [];
  userRegisterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.existUserEmails = ["aa@aa.com", "bb@bb.com", "dd@dd.com"]

    this.userRegisterForm = fb.group({
      fullName: ['', [Validators.required, Validators.pattern("[A-Za-z]{3,}")]],
      email: ['',[Validators.required,existEmailValidator(this.existUserEmails)]],
      phoneNo: fb.array([this.fb.control('')]),
      address: fb.group({
        city: [''],
        postalCode: [''],
        street: [''],
      }),
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      referal: [''],
      referalOther: [''],
    },
      {
      validators:PasswordMatch
    }

    );





    // this.userRegisterForm = new FormGroup({
    //   fullName: new FormControl('',[Validators.required,Validators.pattern("[A-Za-z]{3,}")]),
    //   email: new FormControl(''),
    //   phoneNo: new FormControl(),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     postalCode: new FormControl(''),
    //     street:new FormControl(''),
    //   }),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    // });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // In Case Edit profile
    // this.userRegisterForm.get('fullName')?.setValue('Test')
    //Call API to get user profile
    // this.userRegisterForm.setValue({
    //   fullName: 'Mohamed Adel',
    //   email: 'mohamed@gmail.com',
    //   address: {
    //     city: 'Cairo',
    //     postalCode: 111,
    //     street:'street 1 '
    //   }
    // })

    //can provide some propirties
    //  this.userRegisterForm.patchValue({
    //   fullName: 'Mohamed Adel',
    //   email: 'mohamed@gmail.com',
    //   address: {
    //     city: 'Cairo',
    //     postalCode: 111,
    //     street:'street 1 '
    //   }
    // })

  }

  get fullName() {
    return this.userRegisterForm.get('fullName');
  }

  get phoneNumbers() {
    return this.userRegisterForm.get('phoneNo') as FormArray;
  }

  get phoneNoRef() {
    return this.userRegisterForm.get('phoneNo')
  }
  get referal() {
    return this.userRegisterForm.get('referal');
  }
  get email() {
    return this.userRegisterForm.get('email');
  }

  get password() {
    return this.userRegisterForm.get('password')
  }
  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword')
  }

  // fillForm() {
  //   // In Case Edit profile
  //   // this.userRegisterForm.get('fullName')?.setValue('Test')
  //   //Call API to get user profile
  //   // this.userRegisterForm.setValue({
  //   //   fullName: 'Mohamed Adel',
  //   //   email: 'mohamed@gmail.com',
  //   //   address: {
  //   //     city: 'Cairo',
  //   //     postalCode: 111,
  //   //     street:'street 1 '
  //   //   }
  //   // })

  //   //can provide some propirties
  //    this.userRegisterForm.patchValue({
  //     fullName: 'Mohamed Adel',
  //     email: 'mohamed@gmail.com',
  //     address: {
  //       city: 'Cairo',
  //       postalCode: 111,
  //       street:'street 1 '
  //     }
  //   })
  // }


  submit() {
    // let userModel:User = this.userRegisterForm.value;
    // let userModel:User = this.userRegisterForm.value as User;
    let userModel: User = <User>this.userRegisterForm.value;
    console.log(userModel)
  }

  addPhoneNo(event: any) {
    this.phoneNumbers.push(new FormControl(''));
    event.target.style.display = 'none'
  }

  updateReferalValidators() {
    if (this.referal?.value == 'other') {
      this.userRegisterForm.get('referalOther')?.addValidators([Validators.required])
    } else {
      this.userRegisterForm.get('referalOther')?.clearValidators()

    }
    this.userRegisterForm.get('referalOther')?.updateValueAndValidity()

  }


  // existEmailValidator():ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     let emailVal: string = control.value;
  //     let ValidationError = { 'EmailNotValid': { 'value': emailVal } };
  //     if (emailVal.length == 0 && control.untouched) {
  //       return null;
  //     }
  //     return (emailVal.includes('@') ? null : ValidationError);
  //   }







}
