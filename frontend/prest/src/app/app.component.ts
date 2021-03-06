import { Component } from '@angular/core';
import {AuthService} from "./security/service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prest';
  constructor(public authService: AuthService) { }
}
