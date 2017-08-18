import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ResultsPage } from '../results/results';
import { AboutPage } from '../about/about';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
    Date: any;
    Time: any;
    Longitude: any;
    Latitude: any;
    Record : any;
    map: any;
    @ViewChild('map') mapElement: ElementRef;

    constructor(public alertCtrl: AlertController, public geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams, public locationTracker: LocationTracker, public modalCtrl: ModalController) {
      this.Record = [];
      this.Longitude = "";
      this.Latitude = "";
      this.Date = "";
      this.Time = "";
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad SecondPage');
      this.loadMap();
    }

    launchAboutPage() {
      const myAbout = this.modalCtrl.create(AboutPage);
      myAbout.present();
    }

    launchResultsPage() {
        this.stop();
        this.navCtrl.push(ResultsPage);
    }

    stop(){
      this.locationTracker.stopTracking();
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
}
