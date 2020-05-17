import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { sdconfig } from 'src/app/core/sdconfig';

@Injectable()
export class LogService {

  headers = new Headers();
  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  logReponse(type: string, data: any, uid: any) {
    return this.http.post(sdconfig.backendHost + "/log/" + uid, data);
  }

  logPracticeState(data: any, uid: any) {
    return this.http.post(sdconfig.backendHost + "/log/practice/state/" + uid, data);
  }

  logTestState(data: any, uid: any) {
    return this.http.post(sdconfig.backendHost + "/log/test/state/" + uid, data);
  }

  clearUserState(uid: any) {
    return this.http.delete(sdconfig.backendHost + "/log/state/" + uid);
  }

  // get previous results of a given word.
  getLog(data: any, uid: any) {
    return this.http.get(sdconfig.backendHost + "/log/word/" + uid, { params: data });
  }

  // get logs of all sets of a given level.
  getLogsByLevel(data: any, uid: any) {
    return this.http.get(sdconfig.backendHost + "/log/level/" + uid, { params: data });
  }

  // add a favorite word.
  addFavorite(data: any, uid: any) {
    return this.http.post(sdconfig.backendHost + "/log/add-favorite/" + uid, data);
  }

  // remove a favorite word.
  removeFavorite(data: any, uid: any) {
    return this.http.post(sdconfig.backendHost + "/log/remove-favorite/" + uid, data);
  }
}