import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {Picture} from "../../shared/models/picture.model";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent implements OnInit {

  @Input() photo: Picture

  constructor() {
  }

  ngOnInit(): void {
  }

}
