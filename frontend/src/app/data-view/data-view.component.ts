import { Component, HostListener, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {

  messages=[];

  constructor(protected socketService: WebSocketService,

    private cookieService: CookieService) {
      socketService.outEven.subscribe(res => {
          console.log("outeven")
      })
    }

  ngOnInit(): void {
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove = (e: any) => {
    console.log(e)
  }

}
