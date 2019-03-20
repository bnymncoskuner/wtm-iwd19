import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wtm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder;
  @Input() icon;
  @Input() value;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateValue(event) {
    this.value = event;
    this.valueChange.emit(this.value);
  }

  onClick() {
    this.btnClick.emit();
  }

}
