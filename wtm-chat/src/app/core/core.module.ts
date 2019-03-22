import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialogModule } from '@angular/material/dialog';

import { environment } from '../../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { UsernameDialogComponent } from './components/username-dialog/username-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, UsernameDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SharedModule,
    MatDialogModule
  ],
  exports: [LoginComponent],
  entryComponents: [UsernameDialogComponent],
  providers: [AngularFireDatabase]
})
export class CoreModule { }
