import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove = (e: any, emit: false) => {
    console.log(e)
    if (emit) {
      this.emit();
    }
  }

  emit(){
    
  }

}
