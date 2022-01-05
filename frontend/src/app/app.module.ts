import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { DataViewComponent } from './data-view/data-view.component';

import { SocketIoModule } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';
import { WebSocketService } from './web-socket.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    DataViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule
  ],
  providers: [
    WebSocketService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
