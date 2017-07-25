import { Injectable, NgZone } from '@angular/core';
import 'rxjs/add/operator/filter';
import { BackgroundGeolocation,BackgroundGeolocationConfig } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@Injectable()
export class LocationTracker {

  public watch: any;
  public loc_time: [number, number, number];
  public arr: Array<any> = [];
  public lat: number = 0;
  public lng: number = 0;
  public time: number = 0;

  constructor(public zone: NgZone,private backgroundGeolocation: BackgroundGeolocation,private geolocation: Geolocation) {};
  //const config: BackgroundGeolocationConfig = {};

  startTracking() {

    // Background Tracking

    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 2000
    };

    this.backgroundGeolocation.configure(config).subscribe((location) => {

      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
      });

    }, (err) => {

      console.log(err);

    });

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();


    // Foreground Tracking

    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

      console.log(position);
      console.log(position.timestamp);
      //converts from epoch to current time which you can then do .getHours... etc
      //var utcSeconds = position.timestamp;
      //var d = new Date(utcSeconds);


      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.time = position.timestamp;
        this.loc_time = [this.time , this.lat, this.lng];
        this.arr.push(this.loc_time);

        this.loc_time = [this.time , this.lat, this.lng];
        this.arr.push(this.loc_time);

        console.log(this.arr);
      });

    });

  }

  stopTracking() {

    console.log('stopTracking');

    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();

  }

}
