import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  message: string;
  description: string;
}

@Component({
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['../confirm-dialog/confirm-dialog.component.css', './edit-dialog.component.css']

})
export class EditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onPrimaryClick(): void {
    this.dialogRef.close({ status: 'SUCCESS', value: this.data.value });
  }

  onSecondaryClick() {
    this.dialogRef.close({status: 'CANCEL'});
  }
}
