import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor() { }

  zoom = 8;
  center: google.maps.LatLng = new google.maps.LatLng(0, 0);
  options: google.maps.MapOptions = {
    center: this.center,
    zoom: 5,
    disableDefaultUI: true
  };

  markers: Array<google.maps.Marker>;


  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      // this.center = {
      //   lat: position.coords.latitude,
      //   lng: position.coords.longitude
      // };
      this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.zoom = 10;

    }, err => {
      // this.center = {
      //   lat: 43.736004,
      //   lng: -79.453579
      // };
      this.center = new google.maps.LatLng(43.736004, -79.453579);

      this.zoom = 7;
    })
  }



  AddMarker(marker: google.maps.Marker) {
    this.markers.push(marker);
  }

  DeleteMarker(marker: google.maps.Marker) {
    let indexToDelete = this.markers.indexOf(marker);
    this.markers.splice(indexToDelete, 1);
  }

  PointMarkerOnMap(marker: google.maps.Marker) {
    this.center = marker.getPosition();
  }


}
