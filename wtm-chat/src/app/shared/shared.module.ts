import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatIconModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [InputComponent]
})
export class SharedModule { }
