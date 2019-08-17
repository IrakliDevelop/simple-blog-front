import { Component, OnInit } from '@angular/core';

import { User } from '../shared/models/user.model';
import {ProfileService} from './services/profile.service';
import {UserService} from '../shared/services';
import {GravatarService} from '../shared/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private profileService: ProfileService,
    private userService: UserService,
    private gravatarService: GravatarService,
  ) { }

  ngOnInit() {
    this.user = {};
    this.profileService.getUserInfo().subscribe(data => {
      this.user = data;
      if (!this.user.avatar) {
        this.user.avatar = this.gravatarService.getUserGravatar(this.user.username);
      }
    });
  }

  onLogout(): void {
    this.userService.logOut();
  }

}
