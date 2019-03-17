import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPanelComponent } from './users-panel.component';

@NgModule({
  declarations: [UsersPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [UsersPanelComponent]
})
export class UsersPanelModule { }
