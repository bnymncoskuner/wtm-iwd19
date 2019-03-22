import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'wtm-username-dialog',
  templateUrl: './username-dialog.component.html',
  styleUrls: ['./username-dialog.component.scss']
})
export class UsernameDialogComponent implements OnInit {

  username;

  constructor(private ref: MatDialogRef<UsernameDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.ref.close(this.username);
  }

}
