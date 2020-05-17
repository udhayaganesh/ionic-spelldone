import { Component, OnInit, Inject } from '@angular/core';
import { ProfileService } from '../profile.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private profileService: ProfileService,
    private toastService: ToastrService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  sendResetPasswordLink() {
    this.profileService.resetPassword(this.data.email).then(() => {
      this.toastService.success('Password reset link sent!');
      this.dialogRef.close();
    }).catch((error) => {
      this.toastService.success('Unable to send reset link at the moment. Please try later.');
      this.dialogRef.close();
    });
  }
}
