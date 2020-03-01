import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, BrowserAnimationsModule, MdButtonModule, MdCardModule, MdInputModule],
  declarations: [AppComponent, MessagesComponent, NewMessageComponent],
  bootstrap: [AppComponent],
  providers: [WebService]
})
export class AppModule { }