import { Component, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';

@Component({
  selector: 'wtm-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.sass']
})
export class MessagePanelComponent implements OnInit {

  message$;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.message$ = this.messageService.getMessages();
  }

}
