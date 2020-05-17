import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { SearchService } from '../shared/serch.service';
import { SpinnerService } from '../spinner/spinner.service';
import { WordDetailComponent } from '../shared/word-detail/word-detail.component';
import { SessionType, Languages, PlanType, Role } from '../core/enum/enum';
import { debounceTime, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { LogService } from '../shared/log.service';
import { StorageService } from '../shared/services/storage.service';
import { SDConstants } from '../core/constant/constant';
import { trigger, transition, animate, style } from '@angular/animations';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { MessageDialogComponent } from '../shared/dialogs/message-dialog/message-dialog.component';
import { Utility } from '../shared/utility/utility';
import { EditDialogComponent } from '../shared/dialogs/edit-dialog/edit-dialog.component';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('toggleSidebar', [
      transition('void => *', [style({ opacity: 0, marginLeft: '-250px' }), animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')]),
      transition('* => void', [animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0, marginLeft: '-250px' }))])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  @ViewChild('worddetail',{static:false}) worddetail: WordDetailComponent;
  @ViewChild('nextBtn',{static:false}) nextBtn: ElementRef;
  @ViewChild('content',{static:false}) contentElm: ElementRef;
  @ViewChild('sidebar',{static:false}) sidebarElm: ElementRef;

 
  planType = PlanType; //??? private
  rootModules: any; //??? private
  words: any[] = [];
  currentIndex = 0;
  details: any = {};
  setList: any[] = [];
  showList = true;
  currentScreen: any;
  currentSetInfo: any;
  tab: any;
  errorMsg: string;
  lastLoggedIndex: number = -1;
  setState: any;
  language: Languages;
  sidebar = {
    isOpen: true
  };
  isMobileView: boolean = false;
  userData: any;
  userSubscription: any;
  currentWord: any;
  role = Role;
  openFeedback: boolean;
  gotoIndex: number;
  isFirstLoad: boolean;
  resumeUserState: boolean;

  constructor(private dashboardService: DashboardService,
    private searchService: SearchService,
    private spinnerService: SpinnerService,
    private logService: LogService,
    private storageService: StorageService,
    private router: Router,
    private toastService: ToastrService,
    private dialog: MatDialog,
    private messageService: MessageService) {
    this.messageService.toggleSidbar = this.toggleSidebar.bind(this);
  }

  ngOnInit() {
    if (window.screen.width <= 800) {
      // this.sidebar.isOpen = false;
      this.isMobileView = true;
    }

    this.userData = this.storageService.getUser();
    this.userSubscription = this.storageService.getSubscription();

    this.language = Languages.ENGLISH;
    this.dashboardService.getModules(this.language).subscribe((response: any) => {
      this.rootModules = response.json();
      let defaultModule = {
        rootModule: this.rootModules[0],
        module: this.rootModules[0].modules[0],
        level: this.rootModules[0].modules[0].levels[0]
      };
      // if user clicks on levels on the sidebar, then clear user state from db.
      let clearUserState = true;
      if (this.userData && this.userData.userLastState) {
        const rootModule = Utility.findObjectByKey(this.userData.userLastState.rootmodule, this.rootModules, 'id');
        if (rootModule) {
          const module = Utility.findObjectByKey(this.userData.userLastState.module, rootModule.modules, 'id');
          if (module) {
            const level = Utility.findObjectByKey(this.userData.userLastState.level, module.levels, 'id');
            if (level) {
              defaultModule = {
                rootModule,
                module,
                level
              };
              // if loading user's last state, then do not clear user state from db.
              clearUserState = false;
            }
          }
        }
      }
      this.getSets(defaultModule, clearUserState);

      this.isFirstLoad = true;
    }, error => {
      console.log(error);
    });
  }

  // clearUserState - this flag indicates whether to clear user state from db, when a level is clicked in sidebar.
  getSets(data: any, clearUserState: boolean) {
    this.tab = undefined;
    this.currentScreen = undefined;
    this.currentIndex = 0;
    this.details = undefined;

    this.currentSetInfo = {
      language: this.language,
      rootModule: data.rootModule,
      module: data.module,
      level: data.level
    };

    if (this.isMobileView) {
      this.toggleSidebar();
    }
    this.spinnerService.show();

    this.storageService.setCurrentState(this.currentSetInfo);
    this.dashboardService.getSets(this.language, data.rootModule.id, data.module.id, data.level.id).subscribe((response: any) => {
      this.setList = response.json();

      // get user logs by level if he is not a guest user.
      if (this.userData) {
        this.logService.getLogsByLevel({
          language: this.currentSetInfo.language,
          rootModule: this.currentSetInfo.rootModule.id,
          module: this.currentSetInfo.module.id,
          level: this.currentSetInfo.level.id
        }, this.userData.uid).subscribe(response => {
          this.setState = response.json();
          if (this.userData.userLastState && !this.resumeUserState) {
            const setData = Utility.findObjectByKey(this.userData.userLastState.set, this.setList, 'id');
            this.resumeUserState = true;
            this.start(setData, this.userData.userLastState.mode, this.userData.userLastState.lastwordindex, true);
          }
          this.spinnerService.hide();
        }, error => {
          console.log(error);
          this.spinnerService.hide();
        });
      } else {
        this.setState = {};
        this.spinnerService.hide();
      }
    }, error => {
      console.log(error);
      this.spinnerService.hide();
    });

    if (this.userData && this.userData.userLastState && clearUserState) {
      this.logService.clearUserState(this.userData.uid).subscribe(res => {
        console.log(res);
      });
    }
  }

  start(set: any, type: any, index: number, isResume: boolean) {
    if (this.userData || ((this.storageService.isGuestUser() && set.isFree) && !isResume)) {
      this.tab = 'play';
      this.currentScreen = type;
      this.currentSetInfo.set = set;
      this.storageService.updateCurrentState('setId', set.id);
      this.currentIndex = index;
      this.getWords(this.currentSetInfo);
    } else {
      this.showSignUpMessage();
    }
  }

  startMisspelledWords(set: any, words: string[]) {
    if (this.userData) {
      this.tab = 'play';
      this.currentScreen = SessionType.TEST;
      this.currentSetInfo.set = set;
      this.storageService.updateCurrentState('setId', set.id);
      this.words = words;
      this.currentIndex = 0;
      if (this.words.length) {
        this.getWordDetail();
      }
    } else {
      this.showSignUpMessage();
    }
  }

  startFavoriteWords(set: any, words: string[]) {
    if (this.userData) {
      this.tab = 'play';
      this.currentScreen = SessionType.PRACTICE;
      this.currentSetInfo.set = set;
      this.storageService.updateCurrentState('setId', set.id);
      this.words = words;
      this.currentIndex = 0;
      if (this.words.length) {
        this.getWordDetail();
      }
    } else {
      this.showSignUpMessage();
    }
  }

  showSignUpMessage() {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '500px',
      data: {
        message: 'Please register to get access to all the content.',
        description: '',
        primaryBtn: 'Register',
        secondaryBtn: 'Close'
      }
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response === 'SUCCESS') {
        this.storageService.endGuestSession();
        this.router.navigate(['signup']);
      }
    });
  }

  getWords(currentSetInfo: any) {
    this.dashboardService.getWords(Languages.ENGLISH, currentSetInfo).subscribe((response: any) => {
      this.words = response.json();
      if (this.words.length) {
        this.getWordDetail();
        this.registerDebounce();
        this.lastLoggedIndex = -1;
        this.logState({ word: this.words[0] });
      }
    }, error => {
      console.log(error);
    });
  }

  getWordDetail() {
    this.spinnerService.show();
    this.errorMsg = undefined;

    this.searchService.getWordDetails(this.currentSetInfo.language, this.words[this.currentIndex]).subscribe((response: any) => {
      let result = response.json().result;
      if (result) {
        this.currentWord = result;
        this.formatData(result);
      } else {
        this.details = undefined;
        this.errorMsg = "Word not found!";
        this.spinnerService.hide();
      }
    }, error => {
      console.log(error);
      this.spinnerService.hide();
    });
  }

  formatData(result: any) {
    let entries = result.lexicalEntries;
    let details = {
      id: result.id,
      word: result.word,
      languageOfOrigin: entries[0].entries[0].etymologies,
      lexicalEntries: entries,
      selectedCategory: entries[0],
      isFavorite: false
    };
    if (this.setState && this.setState[this.currentSetInfo.set.id] && this.setState[this.currentSetInfo.set.id].practice) {
      if (this.setState[this.currentSetInfo.set.id].practice.favorite.includes(result.id)) {
        details.isFavorite = true;
      }
    }
    this.details = details;
    this.spinnerService.hide();
  }

  previous() {
    this.errorMsg = '';
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.getWordDetail();
    }
  }

  next() {
    this.errorMsg = '';

    if (this.details && this.currentScreen === SessionType.TEST) {
      this.worddetail.submitAnswer();
    } else {
      if (this.currentIndex < (this.words.length - 1)) {
        this.getNextWord();
      }
    }
  }

  // go to a word using index.
  gotoWord() {
    this.currentIndex = Number(this.gotoIndex);
    this.getWordDetail();
  }

  getNextWord() {
    this.currentIndex++;
    this.getWordDetail();
  }

  gotoNext() {
    if (this.currentIndex < (this.words.length - 1)) {
      this.getNextWord();
    } else {
      // show result
    }
  }

  registerDebounce() {
    const example = fromEvent(this.nextBtn.nativeElement, 'click').pipe(map(i => true));

    const debouncedInput = example.pipe(debounceTime(3000));

    debouncedInput.subscribe(val => {
      this.logState({ word: this.words[this.currentIndex] });
    });

  }

  logState(data: any) {
    const index = this.currentIndex;
    if (this.lastLoggedIndex < this.currentIndex) {
      let logMethod = 'logPracticeState';
      if (this.currentScreen === SessionType.TEST) {
        logMethod = 'logTestState';
      }
      //log values if the user is not a guest user.
      if (this.userData) {
        this.logService[logMethod]({
          language: Languages.ENGLISH,
          rootModule: this.currentSetInfo.rootModule.id,
          module: this.currentSetInfo.module.id,
          level: this.currentSetInfo.level.id,
          set: this.currentSetInfo.set.id,
          word: data.word,
          wordIndex: index
        }, this.userData.uid).subscribe(response => {
          this.lastLoggedIndex = index;
        }, error => {
          console.log(error);
        });
      }
    }
    if (data.exit) {
      setTimeout(() => {
        this.openFeedback = false;
        this.currentWord = null;
      }, 100);
    }
  }

  addFavorite(word: string) {
    this.setState[this.currentSetInfo.set.id].practice.favorite.push(word);
  }

  removeFavorite(word: string) {
    const index = this.setState[this.currentSetInfo.set.id].practice.favorite.indexOf(word);
    if (index >= 0) {
      this.setState[this.currentSetInfo.set.id].practice.favorite.splice(index, 1);
    }
  }

  toggleRootModule(event: Event, rootModule: any) {
    rootModule.expand = !rootModule.expand;
    if (rootModule.expand) {
      event.currentTarget['nextSibling'].style.maxHeight = (rootModule.modules.length * 40) + 'px';
    } else {
      event.currentTarget['nextSibling'].style.maxHeight = 0;
      rootModule.modules.map((item) => {
        item.expand = false;
      });
    }
  }

  toggleModule(event: Event, subModule: any) {
    subModule.expand = !subModule.expand;
    if (subModule.expand) {
      event.currentTarget['parentElement'].parentElement.style.maxHeight = (parseInt(event.currentTarget['parentElement'].parentElement.style.maxHeight) + (subModule.levels.length * 40)) + 'px';
      event.currentTarget['nextSibling'].style.maxHeight = (subModule.levels.length * 40) + 'px';
    } else {
      event.currentTarget['nextSibling'].style.maxHeight = 0;
    }
  }

  hideSidebar() {
    this.contentElm.nativeElement.style.transform = 'translateX(-235px)';
    this.contentElm.nativeElement.style.transition = 'all 300ms';
    this.sidebarElm.nativeElement.style.transform = 'translateX(-3000px)';


    setTimeout(() => {
      this.contentElm.nativeElement.style.transition = 'none';
      this.contentElm.nativeElement.style.transform = 'translateX(0px)';
      this.sidebarElm.nativeElement.style.transform = 'translateX(0px)';
      this.sidebar.isOpen = false;
    }, 300);
  }

  showSidebar() {
    this.sidebarElm.nativeElement.style.transform = 'translateX(-3000px)';
    this.contentElm.nativeElement.style.transform = 'translateX(-250px)';
    this.sidebar.isOpen = true;

    setTimeout(() => {
      this.sidebarElm.nativeElement.style.transform = 'translateX(0px)';
      this.contentElm.nativeElement.style.transition = 'all 300ms';
      this.contentElm.nativeElement.style.transform = 'translateX(0px)';
    }, 200);
  }

  toggleSidebar(){
    this.sidebar.isOpen = !this.sidebar.isOpen;
    this.isFirstLoad = false;
  }

  edit(data: any) {
    console.log(data);
    let categoty;
    let definition;
    let example;
    let langOfOrigin;
    switch (data.property) {
      case 'definitions':
        categoty = Utility.findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id,
          this.currentWord.lexicalEntries, 'lexicalCategory', 'id');

        definition = this.currentWord.lexicalEntries[categoty.index].entries[data.info.entriesindex]
          .senses[data.info.sensesindex].definitions[data.info.definitionsindex];

        this.editField(definition).afterClosed().subscribe(response => {
          if (response && response.status === 'SUCCESS') {
            this.currentWord.lexicalEntries[categoty.index].entries[data.info.entriesindex]
              .senses[data.info.sensesindex].definitions[data.info.definitionsindex] = response.value;
          }
        });
        break;

      case 'examples':
        categoty = Utility.findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id,
          this.currentWord.lexicalEntries, 'lexicalCategory', 'id');

        example = this.currentWord.lexicalEntries[categoty.index].entries[data.info.entriesindex]
          .senses[data.info.sensesindex].examples[data.info.exampleindex];

        this.editField(example.text).afterClosed().subscribe(response => {
          if (response && response.status === 'SUCCESS') {
            this.currentWord.lexicalEntries[categoty.index].entries[data.info.entriesindex]
              .senses[data.info.sensesindex].examples[data.info.exampleindex].text = response.value;
          }
        });
        break;

      case 'etymologies':
        categoty = Utility.findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id,
          this.currentWord.lexicalEntries, 'lexicalCategory', 'id');

        langOfOrigin = this.currentWord.lexicalEntries[categoty.index].entries[0].etymologies[data.info.etymologiesindex];

        this.editField(langOfOrigin).afterClosed().subscribe(response => {
          if (response && response.status === 'SUCCESS') {
            this.currentWord.lexicalEntries[categoty.index].entries[0].etymologies[data.info.etymologiesindex] = response.value;
          }
        });
        break;
    }
  }


  add(data: any) {
    console.log(data);
    let categoty;
    let definition;
    let example;
    let langOfOrigin;
    switch (data.property) {
      case 'definitions':
        categoty = Utility.findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id,
          this.currentWord.lexicalEntries, 'lexicalCategory', 'id');

        this.editField(definition).afterClosed().subscribe(response => {
          if (response && response.status === 'SUCCESS') {
            let definitions = this.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].definitions;
            if (definitions && definitions.length) {
              this.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].definitions.push(response.value);
            } else {
              this.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].definitions = [response.value];
            }

            this.details.lexicalEntries[categoty.index].entries[0].senses[0].definitions = this.currentWord
              .lexicalEntries[categoty.index].entries[0].senses[0].definitions;
          }
        });
        break;

      case 'examples':
        categoty = Utility.findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id,
          this.currentWord.lexicalEntries, 'lexicalCategory', 'id');

        this.editField('').afterClosed().subscribe(response => {
          if (response && response.status === 'SUCCESS') {
            let examples = this.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].examples;
            if (examples && examples.length) {
              this.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].examples.push({
                text: response.value
              });
            } else {
              this.currentWord.lexicalEntries[categoty.index].entries[0].senses[0].examples = [{
                text: response.value
              }];
            }

            this.details.lexicalEntries[categoty.index].entries[0].senses[0].examples = this.currentWord
              .lexicalEntries[categoty.index].entries[0].senses[0].examples;
          }
        });
        break;

      case 'etymologies':
        categoty = Utility.findIndexAndObjectBySubKey(data.info.category.lexicalCategory.id,
          this.currentWord.lexicalEntries, 'lexicalCategory', 'id');

        this.editField('').afterClosed().subscribe(response => {
          if (response && response.status === 'SUCCESS') {
            let etymologies = this.currentWord.lexicalEntries[categoty.index].entries[0].etymologies;
            if (etymologies && etymologies.length) {
              this.currentWord.lexicalEntries[categoty.index].entries[0].etymologies.push(response.value);
            } else {
              this.currentWord.lexicalEntries[categoty.index].entries[0].etymologies = [response.value];
            }
            this.details.languageOfOrigin = this.currentWord.lexicalEntries[categoty.index].entries[0].etymologies;
          }
        });
        break;
    }
  }

  editField(value: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '800px',
      data: {
        value
      }
    });

    return dialogRef;

  }

  updateWord() {
    this.dashboardService.updateWord('English', this.currentWord).subscribe(response => {
      console.log(response);
      this.toastService.success('Updated word successfully.');
    }, error => {
      console.log(error);
    });
  }

  closeFeedback() {
    this.openFeedback = false;
  }
}
