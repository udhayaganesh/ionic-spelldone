import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-signup-status',
  templateUrl: './signup-status.component.html',
  styleUrls: ['./signup-status.component.css']
})
export class SignupStatusComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignupStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onPrimaryClick(): void {
    this.dialogRef.close('SUCCESS');
  }

  onSecondaryClick() {
    this.dialogRef.close('CANCEL');
  }
}
