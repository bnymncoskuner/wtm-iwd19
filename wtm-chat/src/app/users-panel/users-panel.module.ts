import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPanelComponent } from './users-panel.component';
import { UserCountPipe } from './user-count.pipe';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [UsersPanelComponent, UserCountPipe, UserInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [UsersPanelComponent]
})
export class UsersPanelModule { }
