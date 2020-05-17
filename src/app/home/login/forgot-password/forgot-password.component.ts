import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './forgot-password.component.html',
  // styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  inValidEmailId = false;
  email: string;

  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>) { }

  ngOnInit() {

  }

  send() {
    let emailRegEx = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
    if (emailRegEx.test(this.email)) {
      this.dialogRef.close(this.email);
    } else {
      this.inValidEmailId = true;
    }
  }
}