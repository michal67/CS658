import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  Date: any;
  Time: any;
  Longitude: any;
  Latitude: any;
  Record : any;
  map: any;
  @ViewChild('map') mapElement: ElementRef;

  constructor( public alertCtrl: AlertController, private nav: NavController, public geolocation: Geolocation ) {
    this.Record = [];
    this.Longitude = "";
    this.Latitude = "";
    this.Date = "";
    this.Time = "";
  }

  ionViewDidLoad(){
    this.loadMap();
  }



  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      this.Latitude = position.coords.latitude;
      this.Longitude = position.coords.longitude;
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });
  }
  
  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }
  doAlert() {
    let tup: [string, string, string];
    var Date = this.Date;
    var Time = this.Time;
    var Record = this.Record;
    var Longitude = this.Longitude;
    var Latitude = this.Latitude;
    tup = [
      Latitude,
      Longitude,
      Date,
      Time
    ];
    var happy = true;
    if(happy == true){
      console.log(happy);
      if(happy == true){
        let alert = this.alertCtrl.create({
          title: 'Saved Record',
          buttons: ['Ok']
        });
        alert.present();
      }
    }
    Record.push(tup);
    console.log("Record: " + Record);
    console.log("Date: " + Date);
    console.log("Time: " + Time);
    console.log("Latitude: " + this.Latitude);
    console.log("Longitude: " + this.Longitude);
  }
}
