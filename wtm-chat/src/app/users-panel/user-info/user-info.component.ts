import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wtm-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() name: string;  
  @Input() online: boolean;
  @Input() self: boolean;

  constructor() { }

  ngOnInit() {
  }

}
