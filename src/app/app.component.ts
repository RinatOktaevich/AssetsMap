import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateMarkerModalComponent } from './modals/create-marker-modal/create-marker-modal.component';
import { IAsset } from './types/IAsset';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  idCounter: number = 0;

  title = "Site Title";
  assetSearchRequest: string;
  newCreatedAsset: IAsset;
  deletingAsset: IAsset;
  selectedAsset: IAsset;

  AddAssetDialog() {
    const dialogRef = this.dialog.open(CreateMarkerModalComponent, {
      width: '314px',
      panelClass: 'custom-dialog-container'
    });


    dialogRef.afterClosed().subscribe((asset: IAsset) => {
      if (asset != undefined) {
        asset.id = this.idCounter++;
        this.newCreatedAsset = asset;

      }
    });
  }

  deleteAsset(event: IAsset) {
    this.deletingAsset = event;
  }

  selectAsset(event: IAsset) {
    this.selectedAsset = event;
  }


  ngOnInit() {

    navigator.geolocation.getCurrentPosition(position => {

      let homeAsset: IAsset = {
        id: this.idCounter++,
        name: "HOME",
        point: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      };

      this.newCreatedAsset = homeAsset;

    }, err => { });
  }

}
