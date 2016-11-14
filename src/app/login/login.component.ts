import { Component } from '@angular/core';
import {Login} from "./Login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  public login: Login = new Login(1, "test","","");
  constructor(private router:Router) {
  }
  verificationCode = Math.floor(Math.random()*10000000) + "";
  checkCode =  "";
  getVerificationCode() {
    this.verificationCode = Math.floor(Math.random()*10000000) + "" ;
  }
  getCheckCode() {
    this.checkCode = Math.floor(Math.random()*10000000) + "" ;
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/heroes']);
  }
  isVerified = false;
  onKey1(value: string) {
    if (value != this.verificationCode) {
      this.isVerified = true;
    }else{
      this.isVerified = false;
    }
  }
  isChecked = false;
  onKey2(value: string) {
    if (value != this.checkCode) {
      this.isChecked = true;
    }else{
      this.isChecked = false;
    }
  }
}
