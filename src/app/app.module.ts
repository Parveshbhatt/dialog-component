import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RtDialogComponent } from './rt-dialog/rt-dialog.component';
import { RtSidebarComponent } from './rt-sidebar/rt-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    RtDialogComponent,
    RtSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
