import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateMarkerModalComponent } from './modals/create-marker-modal/create-marker-modal.component';
import { IAsset } from './types/IAsset';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  title = "Site Title";
  searchInput: string;
  newAsset: IAsset;

  AddAssetDialog() {
    const dialogRef = this.dialog.open(CreateMarkerModalComponent, {
      width: '314px',
      panelClass: 'custom-dialog-container'
    });


    dialogRef.afterClosed().subscribe((asset: IAsset) => {
      if (asset != undefined) {
        console.debug(asset);
      }
    });
  }

  deleteAsset(event: IAsset) {
    let sd = event;
  }

}
