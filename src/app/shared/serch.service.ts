import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
import { sdconfig } from '../core/sdconfig';

@Injectable()
export class SearchService {

  headers = new Headers();
  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getWordDetails(language: string, wordId: any) {
    return this.http.get(sdconfig.backendHost + "/search/" + wordId, { params: { language } });
  }
}
