import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPanelComponent } from './users-panel.component';
import { UserCountPipe } from './user-count.pipe';

@NgModule({
  declarations: [UsersPanelComponent, UserCountPipe],
  imports: [
    CommonModule
  ],
  exports: [UsersPanelComponent]
})
export class UsersPanelModule { }
