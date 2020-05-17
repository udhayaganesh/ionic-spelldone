import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  message: string;
  description: string;
}

@Component({
  selector: 'mb-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['../confirm-dialog/confirm-dialog.component.css']

})
export class MessageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('sdfds');
  }

  onPrimaryClick(): void {
    this.dialogRef.close('SUCCESS');
  }

  onSecondaryClick() {
    this.dialogRef.close('CANCEL');
  }
}
