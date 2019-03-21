import { Component, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';

@Component({
  selector: 'wtm-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss']
})
export class MessagePanelComponent implements OnInit {

  message$;
  message;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.message$ = this.messageService.getMessages();
  }

  sendMessage() {
    this.messageService.sendMessage(this.message);
    this.message = '';
  }

}
