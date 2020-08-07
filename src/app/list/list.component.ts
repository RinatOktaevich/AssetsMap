import { Component, OnInit, OnChanges, Input, SimpleChange, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { IAsset } from "../types/IAsset";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteMarkerModalComponent } from '../modals/delete-marker-modal/delete-marker-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnChanges {
  constructor(public dialog: MatDialog) { }

  @Input() searchRequest: string = "";
  @Input() createdAsset: IAsset = null;

  @Output() assetDeletedEvent: EventEmitter<IAsset> = new EventEmitter<IAsset>();
  @Output() assetSelectedEvent: EventEmitter<IAsset> = new EventEmitter<IAsset>();


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

  itemSelected(item: IAsset) {
    console.debug("${item.name} selected");
    this.assetSelectedEvent.emit(item);
  }

  ngOnChanges(change: any): void {
    let filter = change.searchRequest?.currentValue;
    let newAsset = change.createdAsset?.currentValue;

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

    if (newAsset != undefined && newAsset != null) {
      this.addAsset(newAsset);
    }


  }


  addAsset(asset: IAsset) {
    this.list.push(asset);
  }
}
