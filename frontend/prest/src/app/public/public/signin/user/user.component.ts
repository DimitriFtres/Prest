import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../security/service/auth.service";
import {SigninPayload} from "../../../../security/model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formCredential: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }


  submit(): void {
    this.authService.signin(this.formCredential.value as SigninPayload).subscribe(signin => console.log(signin));
  }
}
