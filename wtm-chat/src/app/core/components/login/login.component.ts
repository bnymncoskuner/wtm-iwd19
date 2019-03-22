import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { UsernameDialogComponent } from '../username-dialog/username-dialog.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'wtm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  localStorageUsernameKey = 'WTM-username';

  constructor(private dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    const ref = this.dialog.open(UsernameDialogComponent, {    
      width: '300px',
      disableClose: true
    });

    ref.afterClosed().subscribe(result => this.setName(result));
  }

  setName(name) {
    this.userService.createUser(name);
  }

}
