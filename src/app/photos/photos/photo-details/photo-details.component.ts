import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PhotoService} from "../../../shared/services/photo.service";
import {AuthService} from "../../../shared/services/auth.service";
import {Photo} from "../../../shared/models/photo.model";

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photoDetails: Photo;

  constructor(private router: ActivatedRoute,
              private photoService: PhotoService,
              private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.getCurrentToken()
    this.getCurrentPhotoId();
  }

  private getCurrentPhotoId(): void {
    let currentPhotoId = this.router.snapshot.paramMap.get('id');
    this.getPhotoDetails(currentPhotoId);
  }

  private getPhotoDetails(currentPhotoId: string): void {
    let token = this.authService.getCurrentToken();
    this.photoService.getPhotoDetailsById(token, currentPhotoId).subscribe(res => {
      this.photoDetails = res;
    })

  }
}
