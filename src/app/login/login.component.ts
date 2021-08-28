import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  public rota: string = "http://localhost:3000";
  errorLogin = false;
  constructor(
    fb: FormBuilder,
    private http: HttpClient,
    private router: Router
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

  getIndicadores(){
    
  }

  login() {
    this.http.post(`${this.rota}/login`, { email: this.form.controls.email.value, senha: this.form.controls.senha.value })
      .subscribe(
        (resultado: any) => {
          console.log(resultado)
          if (resultado.status == '200') {
            this.errorLogin = false;
            this.router.navigate(['dashboard'])
          }
        },
        erro => {
          if (erro.status == 400) {
            this.errorLogin = true;
            console.log(erro);
          }
        }
      );
  }

}
