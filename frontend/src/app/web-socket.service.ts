import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventEmitter, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService extends Socket {

  outEven: EventEmitter<any> = new EventEmitter();

  constructor(private cookieService: CookieService) {
    super({
      url: "http://localhost:3000",
      options: {
        query: {
          nameRoom: cookieService.get("room_id")
        }
      }
    });
  }
}
