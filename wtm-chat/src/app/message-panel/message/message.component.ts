import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wtm-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message;
  @Input() self: boolean;

  constructor() { }

  ngOnInit() {
  }

}
