import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {NgModule} from "@angular/core";
import {PhotosComponent} from "./photos/photos.component";

import { PhotoComponent } from './photo/photo.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import {PhotosRoutingModule} from "./photos-routing.module";
import {StartComponent} from "./start/start.component";


@NgModule({

  imports: [
    SharedModule,
    PhotosRoutingModule
  ],
  declarations: [
    PhotosComponent,
    PhotoComponent,
    PhotoDetailsComponent,
    StartComponent
  ]
})
export class PhotosModule { }
