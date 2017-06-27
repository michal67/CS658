import { Component, ViewChild//



 } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  TimeMil: any;
  Longitude: any;
  Latitude: any;
  Record : any;
  map: any;
  @ViewChild('map') mapElement;

  constructor(public alertCtrl: AlertController, private nav: NavController) {
    this.TimeMil = "";
    this.Record = [];
    this.Longitude = "";
    this.Latitude = "";
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap(){
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  doAlert() {
    let tup: [string, string, string];
    var TimeMil = this.TimeMil;
    var Record = this.Record;
    var Longitude = this.Longitude;
    var Latitude = this.Latitude;
    tup = [
      TimeMil,
      Latitude,
      Longitude
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
    console.log("Time: " + TimeMil);
    console.log("Latitude: " + this.Latitude);
    console.log("Longitude: " + this.Longitude);
  }
}
