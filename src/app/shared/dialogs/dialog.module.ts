import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';


@NgModule({
  imports: [CommonModule, FormsModule, MatDialogModule, MatButtonModule],
  declarations: [ConfirmDialogComponent, MessageDialogComponent, EditDialogComponent],
  entryComponents: [MessageDialogComponent, EditDialogComponent],
  exports: []
})
export class DialogModule { }