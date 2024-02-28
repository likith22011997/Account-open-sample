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
  user = {
    name: '',
    age: '',
    fname: '',
    mname: '',
    useraddress: '',
    work: '',
    income: '',
  };

  submitted = false;
  // constructor() {}
  ngOnInit() {}

  createNewAcc() {
    this.edited = !this.edited;
    // console.log('newacc');
  }

  newAccCreated(form: NgForm) {
    this.submitted = true;
    console.log(this.signupForm);
    this.user.name = this.signupForm.value.username;
    this.user.age = this.signupForm.value.age;
    this.user.fname = this.signupForm.value.fathername;
    this.user.mname = this.signupForm.value.mothername;
    this.user.useraddress = this.signupForm.value.address;
    this.user.work = this.signupForm.value.occupation;
    this.user.income = this.signupForm.value.inc;
    this.accCreation = 'ACCOUNT CREATED SUCCESSFULLY';
    // console.log('submitted');
  }
}
