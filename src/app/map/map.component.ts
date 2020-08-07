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
  center: google.maps.LatLng | google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    center: this.center,
    zoom: 5,
    disableDefaultUI: true
  };

  @Input() createdAsset: IAsset = null;
  @Input() deletedAsset: IAsset = null;
  @Input() selectedAsset: IAsset = null;

  markers: IMarker[] = [];


  ngOnInit(): void {
    this.center = new google.maps.LatLng(43.736004, -79.453579);
    this.zoom = 7;

  }

  ngOnChanges(change: any) {

    let newAsset: IAsset = change.createdAsset?.currentValue;
    let deletedAsset: IAsset = change.deletedAsset?.currentValue;
    let selectAsset: IAsset = change.selectedAsset?.currentValue;

    if (newAsset != undefined && newAsset != null) {
      this.AddMarker(newAsset);
      this.PointMarkerOnMap(newAsset.point);
    }
    if (deletedAsset != undefined && deletedAsset != null) {
      this.DeleteMarker(deletedAsset);
    }
    if (selectAsset != undefined && selectAsset != null) {
      this.PointMarkerOnMap(selectAsset.point);
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
    this.center = {
      lat: position.lat,
      lng: position.lng
    };
  }


}
