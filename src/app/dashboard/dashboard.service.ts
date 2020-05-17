import { Inject, Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { sdconfig } from '../core/sdconfig';

@Injectable()
export class DashboardService {
  headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getModules(language: any) {
    return this.http.get(sdconfig.backendHost + "/words/" + language, { headers: this.headers });
  }

  getSets(language: string, rootModuleId: any, moduleId: any, levelId: any) {
    return this.http.get(sdconfig.backendHost + "/words/" + language + "/" + rootModuleId + "/" + moduleId + "/" + levelId, { headers: this.headers });
  }

  getWords(language: any, currentSetInfo: any) {
    return this.http.get(sdconfig.backendHost + "/words/" + language + "/" + currentSetInfo.rootModule.id + "/" + currentSetInfo.module.id + "/" + currentSetInfo.level.id + "/" + currentSetInfo.set.id, { headers: this.headers });
  }

  updateWord(language: string, word: any) {
    return this.http.put(sdconfig.backendHost + "/search/" + word.word, { params: { language, word } });
  }

  sendFeedback(uid: any, feedback: any) {
    return this.http.post(sdconfig.backendHost + "/words/feedback/" + uid, { feedback });
  }
}