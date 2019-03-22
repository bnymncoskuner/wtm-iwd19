import { Component, HostListener } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'wtm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private userService: UserService) {}

  @HostListener('window:beforeunload', ['$event'])
  logout($event) {
    this.userService.logout();
  }
}
