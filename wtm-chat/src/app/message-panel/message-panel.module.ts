import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePanelComponent } from './message-panel.component';
import { MessageComponent } from './message/message.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MessagePanelComponent, MessageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MessagePanelComponent]
})
export class MessagePanelModule { }
