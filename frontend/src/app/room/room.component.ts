import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room_id!: string

  constructor(private router: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit(): void {
    var room_id = this.router.snapshot.paramMap.get("room_id")
    if (room_id != null ){
      this.room_id = room_id
      this.cookieService.set("room_id", this.room_id)
    }
  }

}
