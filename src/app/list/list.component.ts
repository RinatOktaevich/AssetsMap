import { Component, OnInit } from '@angular/core';
import { IPoint } from "../types/IPoint";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  list: IPoint[] = [];


  ngOnInit(): void {

    let point: IPoint = {
      name: "asas",
      point: {
        lat: 51.508742,
        lng: -0.120850
      }
    };

    for (let index = 0; index < 20; index++) {
      this.list.push(point);
    }



  }


  deleteItem(event: any) {
    let sd = event;
  }

}
