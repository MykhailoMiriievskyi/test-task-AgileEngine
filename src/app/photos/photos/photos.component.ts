import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

import {PhotoService} from "../../shared/services/photo.service";
import {Picture} from "../../shared/models/picture.model";


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {

  photos: Picture[];
  currentPage: number;
  token: string;

  constructor(
    private authService: AuthService,
    private photoService: PhotoService
  ) {
  }

  ngOnInit(): void {
    this.getToken();
  }

  private getToken(): void {
    this.token = this.authService.getCurrentToken();
    this.getFirstPage();
  }

  private getFirstPage(): void {
    this.photoService.getFirstPage(this.token).subscribe(res => {
        this.photos = res.pictures;
        this.currentPage = res.page;
      },
      (error => {
      //  handle error in future
      })
    );
  }

  public downloadPhoto(): void {
    let page = ++this.currentPage;
    this.photoService.getPageByNumber(this.token, page).subscribe(res => {
      if (res) {
        this.photos = this.photos.concat(res.pictures);
      }
    })
  }
}
