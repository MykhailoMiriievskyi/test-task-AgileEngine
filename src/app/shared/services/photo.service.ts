import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Page} from "../models/page.model";
import {Photo} from "../models/photo.model";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getFirstPage(token: string): Observable<Page> {
    return this.http
      .get<Page>('http://interview.agileengine.com/images',
        {headers: new HttpHeaders().set('Authorization', token)}
    );
  }

  getPageByNumber(token: string, number: number): Observable<Page> {
    return this.http
      .get<Page>(`http://interview.agileengine.com/images?page=${number}`,
        {headers: new HttpHeaders().set('Authorization', token)}
      );
  }

  getPhotoDetailsById(token: string, id: string): Observable<Photo> {
    return this.http
      .get<Photo>(`http://interview.agileengine.com/images/${id}`,
        {headers: new HttpHeaders().set('Authorization', token)}
      );
  }
}
