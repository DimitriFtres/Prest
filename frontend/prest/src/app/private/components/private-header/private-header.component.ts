import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../security/service/auth.service";

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  sidebar() {
    let sidebar = document.getElementById("sidebar");
    if(sidebar != null)
    {
      console.log(sidebar.style.visibility)
      if(sidebar.style.visibility == 'visible' || sidebar.style.visibility == '')
        sidebar.style.visibility = 'hidden';
    }

  }
}
