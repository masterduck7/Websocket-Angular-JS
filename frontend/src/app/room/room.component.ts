import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room_id!: string
  messages = []

  constructor(private router: ActivatedRoute, protected socketService: WebSocketService,

    private cookieService: CookieService) {
      socketService.outEven.subscribe(res => {
          console.log("outeven")
      })
    }

  ngOnInit(): void {
    var room_id = this.router.snapshot.paramMap.get("room_id")
    if (room_id != null ){
      this.room_id = room_id
      this.cookieService.set("room_id", this.room_id)
    }
  }

  @HostListener("document:click", ["$event"])
  onMouseMove = (e: any) => {
    console.log(e)
  }

}
