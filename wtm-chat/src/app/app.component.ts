import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'wtm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    window.onbeforeunload = () => {
      this.userService.logout();
    };

    window.onunload = () => {
      this.userService.logout();
    };
  }

}
