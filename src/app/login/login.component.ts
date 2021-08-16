import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  form
  typePassword = 'password'
  isPassword = false;
  constructor(
    fb: FormBuilder
  ) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'senha': ['', Validators.compose([Validators.required])]
    });

  }

  ngOnInit() {
  }

  changeTypePassword() {
    this.isPassword = !this.isPassword;
    if (this.isPassword) {
      this.typePassword = 'text';
    } else this.typePassword = "password";

  }


}
