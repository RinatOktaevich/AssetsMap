import { Component, OnInit, OnChanges, Input, SimpleChange, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { IAsset } from "../types/IAsset";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteMarkerModalComponent } from '../modals/delete-marker-modal/delete-marker-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  @Input() filterValue: string = "";
  @Output() assetDeletedEvent: EventEmitter<IAsset> = new EventEmitter<IAsset>();

  list: IAsset[] = [];
  filteredList: IAsset[] = [];
  noItemsFound: boolean = false;


  openDialog(point: IAsset): void {
    const dialogRef = this.dialog.open(DeleteMarkerModalComponent, {
      width: '312px',
      data: point,
      panelClass: 'custom-dialog-container'
    });


    dialogRef.afterClosed().subscribe((result: IAsset) => {
      if (result != undefined) {
        this.assetDeletedEvent.emit(result);
        this.spliceAsset(result);
      }
    });
  }


  spliceAsset(asset: IAsset) {
    let index = this.list.findIndex((val, index) => { if (val.id == asset.id) return true; });
    this.list.splice(index, 1);
  }


  ngOnInit(): void {

    let asset: IAsset = {
      id: 0,
      name: "asas",
      point: {
        lat: 51.508742,
        lng: -0.120850
      }
    };

    this.list = [
      {
        id: 1,
        name: "saas",
        point: {
          lat: 51.508742,
          lng: -0.120850
        }
      }, {
        id: 2,
        name: "mokas",
        point: {
          lat: 51.508742,
          lng: -0.120850
        }
      }, {
        id: 3,
        name: "lorem",
        point: {
          lat: 51.508742,
          lng: -0.120850
        }
      },
      {
        id: 4,
        name: "kaberne",
        point: {
          lat: 51.508742,
          lng: -0.120850
        }
      }
    ];

    for (let index = 5; index < 30; index++) {
      asset.id = index;
      this.list.push(asset);
    }

  }

  ngOnChanges(change: any): void {
    let filter = change.filterValue.currentValue;

    if (filter != undefined && filter.length > 0) {
      this.noItemsFound = false;
      //search input isn`t empty
      this.filteredList = this.list.filter((value: IAsset) => {
        if ((value.name.search(filter)) != -1) {
          return true;
        }
        else
          return false;
      });

      //didn`t found anything
      if (this.filteredList.length == 0)
        this.noItemsFound = true;
    }
    else {
      //search input IS empty
      this.filteredList = [];
      this.noItemsFound = false;
    }

  }
}
