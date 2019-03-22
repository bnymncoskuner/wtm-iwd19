import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreModule } from './core/core.module';
import { UsersPanelModule } from './users-panel/users-panel.module';
import { MessagePanelModule } from './message-panel/message-panel.module';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    UsersPanelModule,
    MessagePanelModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
