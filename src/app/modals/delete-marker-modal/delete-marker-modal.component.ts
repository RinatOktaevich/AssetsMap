import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IAsset } from 'src/app/types/IAsset';

@Component({
  selector: 'delete-marker-modal',
  templateUrl: './delete-marker-modal.component.html',
  styleUrls: ['./delete-marker-modal.component.scss']
})
export class DeleteMarkerModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteMarkerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAsset) { }


  onNoClick(): void {
    this.dialogRef.close();
  }



}
