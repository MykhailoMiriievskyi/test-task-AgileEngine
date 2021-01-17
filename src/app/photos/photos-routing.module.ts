import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import {PhotosComponent} from "./photos/photos.component";
import {BrowserModule} from "@angular/platform-browser";
import {PhotoDetailsComponent} from "./photos/photo-details/photo-details.component";
import {StartComponent} from "./start/start.component";



const routes: Route[] = [
  {path: 'start', component: StartComponent },
  {path: 'photos', component: PhotosComponent },
  {path: 'photos/:id', component: PhotoDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PhotosRoutingModule { }
