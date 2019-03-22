import { Component, OnInit } from '@angular/core';

import { UserService } from '../core/services/user.service';

@Component({
  selector: 'wtm-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.scss']
})
export class UsersPanelComponent implements OnInit {

  users$;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

}
