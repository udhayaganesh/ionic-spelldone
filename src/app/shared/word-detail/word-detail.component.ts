import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Utility } from '../utility/utility';
import { SessionType, Role } from 'src/app/core/enum/enum';
import { LogService } from '../log.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  _details: any;
  userAnswer: any;
  submitted: boolean = false;
  previousAttempts: any;
  currentSetInfo: any;
  userData: any;
  @Input('details')
  set details(value: boolean) {
    this.setNewDetails(value);
  }

  @Input() session: any;

  @Output() addFavorite = new EventEmitter<any>();
  @Output() removeFavorite = new EventEmitter<any>();
  @Output() gotoNext = new EventEmitter<any>();
  @Output() logStatus = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() add = new EventEmitter<any>();
   
  @ViewChild('audioelm',{static:false}) audioTag: ElementRef;
  @ViewChild('correctAudio',{static:false}) correctAudio: ElementRef;
  @ViewChild('responseBox',{static:false}) responseBox: ElementRef;


  sessionType = SessionType;
  role = Role;
  constructor(private logService: LogService,
    private storageService: StorageService) { }

  ngOnInit() {
    this.userData = this.storageService.getUser();
    this.currentSetInfo = this.storageService.getCurrentState();
  }

  ngAfterViewInit() {
  }

  setNewDetails(value: any) {
    this._details = value;
    this.userAnswer = '';
    this.submitted = false;
    this.previousAttempts = [];
    value && this.isAudioAvaliable();
    if (this.session === SessionType.TEST) {
      setTimeout(() => {
        this.responseBox.nativeElement.focus();
      });
    }
  }

  isAudioAvaliable() {
    if (this._details && this._details.selectedCategory && this._details.selectedCategory.pronunciations) {
      setTimeout(() => {
        this.pronunceWord();
      }, 2000);
    }
  }

  pronunceWord() {
    if (this.audioTag) {
      this.playAudio(this.audioTag.nativeElement);
    } else {
      console.log('audio tag not available.');
    }
  }

  playAudio(ev: any) {
    Utility.playAudio(ev);
  }

  setCategory(category: any) {
    this._details.selectedCategory = category;
  }

  submitAnswer() {
    if (this.userAnswer.toLowerCase() !== this._details.id.toLowerCase() && !this.submitted) {
      this.submitted = true;
      this.logResponse(false);
    } else if (this.userAnswer.toLowerCase() === this._details.id.toLowerCase()) {
      this.playAudio(this.correctAudio.nativeElement);
      this.logResponse(true);
      this.gotoNext.emit({});
    } else if (this.submitted) {
      this.gotoNext.emit({});
    }
  }

  logResponse(isCorrect: boolean) {
    // log response if the user is not a guest user.
    if (this.userData) {
      this.logService.logReponse(this.session, {
        language: this.currentSetInfo.language,
        rootModule: this.currentSetInfo.rootModule.id,
        module: this.currentSetInfo.module.id,
        level: this.currentSetInfo.level.id,
        set: this.currentSetInfo.set.id,
        word: this._details.id,
        isCorrect: isCorrect
      }, this.userData.uid).subscribe(response => {

      }, error => {

      });
    }
  }

  getPreviousResults() {
    // get previous attempts result if the user is not a guest user.
    if (this.userData) {
      this.logService.getLog({
        language: this.currentSetInfo.language,
        rootModule: this.currentSetInfo.rootModule.id,
        module: this.currentSetInfo.module.id,
        level: this.currentSetInfo.level.id,
        set: this.currentSetInfo.set.id,
        word: this._details.id
      }, this.userData.uid).subscribe(response => {
        this.previousAttempts = response.json();
      }, error => {
        console.log(error);
      });
    }
  }

  markAsFavorite() {
    this._details.isFavorite = !this._details.isFavorite;
    let action = 'addFavorite';
    if (!this._details.isFavorite) {
      action = 'removeFavorite';
      this.removeFavorite.emit(this._details.id);
    } else {
      this.addFavorite.emit(this._details.id);
    }
    this.logService[action]({
      language: this.currentSetInfo.language,
      rootModule: this.currentSetInfo.rootModule.id,
      module: this.currentSetInfo.module.id,
      level: this.currentSetInfo.level.id,
      set: this.currentSetInfo.set.id,
      word: this._details.id
    }, this.userData.uid).subscribe(response => {
    }, error => {
      console.log(error);
    });
  }

  getSentence(value: any) {
    let sentence = this.formatSentence(value);
    return sentence.replace(this._details.id, '<i class="fa fa-volume-up link"></i>');
  }

  formatSentence(sentence: string) {
    if (sentence) {
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    return sentence || '';
  }

  getDate(logdatetime: any) {
    return new Date(logdatetime).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  getAudioUrl(audioUrl: string) {
    let index = audioUrl.indexOf('audio.oxforddictionaries');
    let url = audioUrl.substr(index, audioUrl.length);
    return 'https://s3.amazonaws.com/' + url;
  }

  editField(property, info) { // {entriesindex, sensesindex, definitionsindex}) {
    this.edit.emit({ property, info });
  }

  addField(property, info) { // {entriesindex, sensesindex, definitionsindex}) {
    this.add.emit({ property, info });
  }

  showHint() {
    if (this.userAnswer) {
      this.userAnswer = this.userAnswer.trim();
      const answeredCharCount = this._details.id.indexOf(this.userAnswer);
      if (answeredCharCount !== -1) {
        this._details.hintCharCount = this.userAnswer.length;
      } else {
        this._details.hintCharCount = 0;
      }
    } else {
      this._details.hintCharCount = 0;
    }
    if (this._details.hintCharCount !== undefined) {
      this._details.hintCharCount++;
    } else {
      this._details.hintCharCount = 1;
    }
    this.userAnswer = this._details.id.substr(0, this._details.hintCharCount);
  }

  showWord() {
    this.userAnswer = this._details.id;
  }

  ngOnDestroy() {
    this.logStatus.emit({ word: this._details.id, exit: true });
  }
}
