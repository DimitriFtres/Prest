import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../security/service/auth.service";
import {SigninPayload, SignupPayload} from "../../../../security/model";
import {UserAddPayload} from "@user/UserAddPayload";
import {UserService} from "@service/user/user.service";
import {TokenService} from "../../../../security/service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formSignup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    nickname: new FormControl('', [Validators.required]),
  });

  constructor(public authService: AuthService,
              public userService: UserService,
              public tokenService: TokenService) { }

  ngOnInit(): void {
  }

  submit(){
    const signupPayload = {
      email: this.formSignup.value.email,
      password: this.formSignup.value.password
    } as SignupPayload
    this.authService.signup(signupPayload).subscribe(credential => {
      const userPayload = {
        nickname: this.formSignup.value.nickname,
        commentaries: [],
        addresses: [],
        userRestaurants: [],
        credential: credential
      } as UserAddPayload
      this.authService.signin(signupPayload as SigninPayload).subscribe(data => {
        console.log(this.tokenService.getToken());
        this.userService.create(userPayload).subscribe();
      });

    });
  }
}
