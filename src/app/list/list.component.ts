import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { IPoint } from "../types/IPoint";
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

  list: IPoint[] = [];
  filteredList: IPoint[] = [];
  noItemsFound: boolean = false;


  openDialog(point: IPoint): void {
    const dialogRef = this.dialog.open(DeleteMarkerModalComponent, {
      width: '250px',
      data: point
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let ret = result;
    });
  }




  ngOnInit(): void {

    let point: IPoint = {
      name: "asas",
      point: {
        lat: 51.508742,
        lng: -0.120850
      }
    };

    this.list = [
      {
        name: "saas",
        point: {
          lat: 51.508742,
          lng: -0.120850
        }
      }, {
        name: "mokas",
        point: {
          lat: 51.508742,
          lng: -0.120850
        }
      }, {
        name: "lorem",
        point: {
          lat: 51.508742,
          lng: -0.120850
        }
      },
      {
        name: "kaberne",
        point: {
          lat: 51.508742,
          lng: -0.120850
        }
      }
    ];

  }

  ngOnChanges(change: any): void {
    let filter = change.filterValue.currentValue;

    if (filter != undefined && filter.length > 0) {
      this.noItemsFound = false;
      //search input isn`t empty
      this.filteredList = this.list.filter((value: IPoint) => {
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
