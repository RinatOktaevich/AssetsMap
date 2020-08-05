import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { IPoint } from "../types/IPoint";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() { }

  @Input() filterValue: string = "";

  list: IPoint[] = [];
  filteredList: IPoint[] = [];
  noItemsFound: boolean = false;


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
