import {Component, OnInit} from '@angular/core';
import {User} from './core/models';
import {UserService} from './shared/services';
import {GravatarService} from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private gravatarService: GravatarService) {
  }

  ngOnInit(): void {
    this.user = this.userService.decodeToken();
    this.user.avatar = this.user.avatar ? this.user.avatar : this.gravatarService.getUserGravatar(this.user.username);
  }

  onLogout() {
    this.userService.logOut();
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}
