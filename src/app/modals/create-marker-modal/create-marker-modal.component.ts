import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { IAsset } from 'src/app/types/IAsset';

@Component({
  selector: 'create-marker-modal',
  templateUrl: './create-marker-modal.component.html',
  styleUrls: ['./create-marker-modal.component.scss']
})
export class CreateMarkerModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateMarkerModalComponent>,
  ) { }

  assetsForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    latitude: new FormControl('', [Validators.required, Validators.min(-90), Validators.max(90)]),
    longitude: new FormControl('', [Validators.required, Validators.min(-180), Validators.max(180)])
  });


  ngOnInit(): void {
  }

  No() {
    this.dialogRef.close();
  }

  getFormValue(): IAsset {
    let formVal = this.assetsForm.value;

    let asset: IAsset = {
      name: formVal.name,
      point: {
        lat: formVal.latitude,
        lng: formVal.longitude
      }
    };

    return asset;
  }

}
