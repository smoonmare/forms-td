import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('formData') signupForm?: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''
  }
  submitted = false;
  
  ngOnInit(): void {
      
  }
  
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm?.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    //   });
    this.signupForm?.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    this.user.username = this.signupForm?.value.userData.username;
    this.user.email = this.signupForm?.value.userData.email;
    this.user.secretQuestion = this.signupForm?.value.secret;
    this.user.secretAnswer = this.signupForm?.value.questionAnswer;
    this.user.gender = this.signupForm?.value.gender;
    this.submitted = true;
  }
}
