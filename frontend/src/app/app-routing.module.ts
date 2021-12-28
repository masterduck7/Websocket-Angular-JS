import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "rooms/:room_id",
    component: RoomComponent
  },
  {
    path: "data",
    component: DataViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
