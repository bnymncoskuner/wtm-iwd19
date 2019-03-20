import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule
  ],
  exports: [InputComponent]
})
export class SharedModule { }
