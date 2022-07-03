import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../security/service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnected?: boolean = undefined;
  constructor(public authService: AuthService) {
    this.authService.isAuthenticated$.subscribe(value => this.isConnected = value);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  sidebar() {
    let sidebar = document.getElementById("sidebar");
    console.log(sidebar);
    if(sidebar != null) {
      console.log(sidebar.style.display)
      if (sidebar.style.visibility == 'hidden')
        sidebar.style.visibility = '';
    }
  }
}
