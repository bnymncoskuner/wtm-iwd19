import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePanelComponent } from './message-panel.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [MessagePanelComponent, MessageComponent],
  imports: [
    CommonModule
  ],
  exports: [MessagePanelComponent]
})
export class MessagePanelModule { }
