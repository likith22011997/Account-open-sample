import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createnewaccount',
  templateUrl: './createnewaccount.component.html',
  styleUrls: ['./createnewaccount.component.css'],
})
export class CreatenewaccountComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  accCreated = false;
  accCreation = '';
  edited = false;
  genders = ['male', 'female'];
  // user = {
  //   name: '',
  //   gender: '',
  //   age: '',
  //   fathername: '',
  //   mothername: '',
  //   address: '',
  //   occupation: '',
  //   income: '',
  // };
  user = {
    name: '',
  };

  submitted = false;

  constructor() {}
  ngOnInit() {}

  createNewAcc() {
    this.edited = !this.edited;
    console.log('newacc');
  }
  // newAccCreated(form: NgForm) {
  //   this.accCreated = true;
  //   this.accCreation = 'ACCOUNT CREATED SUCCESSFULLY';
  //   console.log('submitted');
  //   // this.displayAccDetails = true;
  //   // this.name = this.signUpForm.value.userData.name;
  //   this.submitted = true;
  //   this.user.name = this.signupForm.value.username;
  //   console.log('submitted');
  // }
  newAccCreated(name) {
    this.submitted = true;
    // console.log(this.signupForm);
    console.log(name);
    this.user.name = this.signupForm.value.username;
    this.accCreation = 'ACCOUNT CREATED SUCCESSFULLY';
    // console.log('submitted');
  }
}
