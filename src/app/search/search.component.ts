import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/serch.service';
import { Utility } from '../shared/utility/utility';
import { SpinnerService } from '../spinner/spinner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  wordId: string;
  details: any = {};
  private selectedCategory: any;
  errorMsg: string;

  constructor(private searchService: SearchService,
    private spinnerService: SpinnerService) { }

  ngOnInit() {
  }

  getWordDetails() {
    this.spinnerService.show();
    this.searchService.getWordDetails('English', this.wordId).subscribe((response: any) => {
      let result = response.json().result;
      if (result) {
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

  formatData(results: any) {
    let entries = results.lexicalEntries;
    let details = {
      id: results.id,
      word: results.word,
      languageOfOrigin: entries[0].entries[0].etymologies,
      lexicalEntries: entries,
      selectedCategory: entries[0]
    };
    this.details = details;
    this.spinnerService.hide();
  }

}
