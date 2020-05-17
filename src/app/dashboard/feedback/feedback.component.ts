import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/shared/services/storage.service';

declare var require: any;
@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']

})
export class FeedbackComponent implements OnInit {
  @Input() currentWord: any;
  @Output() close = new EventEmitter<any>();
  fbSent: boolean = false;
  comment: any = '';
  userData: any;
  currentRate = 0;
  showFeedback = true;
  about: any;

  aboutList = {
    origin: 'Language of origin',
    pos: 'Parts of speech',
    pronunciations: 'Pronunciations',
    definition: 'Definition',
    sentence: 'Sentence'
  };
  isMobileView: boolean;
  constructor(private dashboardService: DashboardService,
    private storageService: StorageService,
    private toastService: ToastrService) {
  }

  ngOnInit() {
    if (window.screen.width <= 800) {
      this.isMobileView = true;
    }
    this.userData = this.storageService.getUser();
  }

  ngAfterViewInit() {

  }

  rate(event: Event, point: number) {
    this.currentRate = point;
  }

  sendFeedback() {
    if (this.comment.trim()) {
      let feedback = {
        word: this.currentWord.id,
        about: this.aboutList[this.about],
        comment: this.comment
      };
      this.dashboardService.sendFeedback(this.userData.uid, feedback).subscribe(response => {
        this.toastService.success('Feedback sent successfully.');
        this.comment = null;
        this.about = undefined;
      }, error => {
        this.toastService.error('Unable to send feedback at the moment. Please try later.');
      });
    }
  }

  closeFeedback(event: Event) {
    this.close.emit();
  }
}

