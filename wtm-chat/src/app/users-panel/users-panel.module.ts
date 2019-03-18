import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { UsersPanelComponent } from './users-panel.component';
import { UserCountPipe } from './user-count.pipe';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [UsersPanelComponent, UserCountPipe, UserInfoComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [UsersPanelComponent]
})
export class UsersPanelModule { }
