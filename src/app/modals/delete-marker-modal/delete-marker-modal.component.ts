import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IPoint } from 'src/app/types/IPoint';

@Component({
  selector: 'delete-marker-modal',
  templateUrl: './delete-marker-modal.component.html',
  styleUrls: ['./delete-marker-modal.component.scss']
})
export class DeleteMarkerModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteMarkerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPoint) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
