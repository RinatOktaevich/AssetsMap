import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IAsset } from '../types/IAsset';
import { IMarker } from "../types/IMarker";



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  constructor() { }
  zoom = 8;
  center: google.maps.LatLng | google.maps.LatLngLiteral;// = new google.maps.LatLng(0, 0);
  options: google.maps.MapOptions = {
    center: this.center,
    zoom: 5,
    disableDefaultUI: true
  };

  @Input() createdAsset: IAsset = null;
  @Input() deletedAsset: IAsset = null;




  markers: IMarker[] = [];


  ngOnInit(): void {
    // let mk = new google.maps.Marker({
    //   position:,
    //   title:,
    // });


    navigator.geolocation.getCurrentPosition(position => {

      this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let marker = {
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        title: "You are here",
        label: "Hey)"
      };

      this.markers.push(marker);

      this.zoom = 10;

    }, err => {

      this.center = new google.maps.LatLng(43.736004, -79.453579);
      this.zoom = 7;
    })
  }

  ngOnChanges(change: any) {

    let newAsset: IAsset = change.createdAsset?.currentValue;
    let deletedAsset: IAsset = change.deletedAsset?.currentValue;


    if (newAsset != undefined && newAsset != null) {
      this.AddMarker(newAsset);
      this.PointMarkerOnMap(newAsset.point);
    }
    if (deletedAsset != undefined && deletedAsset != null) {
      // this.AddMarker(newAsset);
      // this.PointMarkerOnMap(newAsset.point);
      this.DeleteMarker(deletedAsset);
    }
  }


  AddMarker(asset: IAsset) {
    let marker = {
      position: asset.point,
      title: asset.name,
      label: asset.name
    };
    this.markers.push(marker);
  }

  DeleteMarker(asset: IAsset) {
    let indexToDelete = this.markers.findIndex((value, index) => {
      if (value.label == asset.name) {
        return true;
      }
    });
    this.markers.splice(indexToDelete, 1);
  }

  PointMarkerOnMap(position: google.maps.LatLngLiteral) {
    this.center = position;
  }


}
