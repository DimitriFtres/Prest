import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "@service/user/user.service";
import {User} from "@user/User";

@Component({
  selector: 'app-modify-user-informations',
  templateUrl: './modify-user-informations.component.html',
  styleUrls: ['./modify-user-informations.component.scss']
})
export class ModifyUserInformationsComponent implements OnInit {
  user?: User;
  constructor(public url: ActivatedRoute,
              public userService: UserService) { }

  ngOnInit(): void {
    if(this.url.snapshot.params['id'] != null)
    this.userService.getDetail(this.url.snapshot.params['id']).subscribe(user => {
      this.user = user;
    });
  }

}
