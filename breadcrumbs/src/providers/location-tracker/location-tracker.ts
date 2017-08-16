import { Injectable, NgZone } from '@angular/core';
import 'rxjs/add/operator/filter';
import { BackgroundGeolocation,BackgroundGeolocationConfig } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocationTracker {

  public watch: any;
  public loc_time: [number, number, number];
  public arr: Array<any> = [];
  public lat: number = 0;
  public lng: number = 0;
  public time: number = 0;
  public myTime: string = "";
  public finalTime: string = "";
  public finalDist: number = 0;

  //-------------------------
  //"Total" variables
  public latArray: Array<number> = [];
  public lngArray: Array<number> = [];
  public timeArray: Array<number> = [];

  public distance: number = 0;
  public timenum: number = 0;

  public oldlat: number = 0;
  public oldlng: number = 0;
  public ogtime: number = -1; //Sentinel value for unassigned ogtime

  public pullCounter: number = 0;
  //-------------------------

  constructor(public zone: NgZone,private backgroundGeolocation: BackgroundGeolocation,private geolocation: Geolocation, public storage: Storage) {};
  //const config: BackgroundGeolocationConfig = {};

  startTracking() {

    this.distance = 0;
    this.timenum = 0;
    this.ogtime = -1;
    this.oldlat = 0;
    this.oldlng = 0;
    this.myTime = "0";

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
      frequency: 1000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

      console.log(position);
      console.log(position.timestamp);
      //converts from epoch to current time which you can then do .getHours... etc

      // Run update inside of Angular's zone
      this.zone.run(() => {
        //----------------------------------------------------
        //Begin "totals" calculations

        this.latArray.push(this.lat);
        this.lngArray.push(this.lng);
        this.timeArray.push(this.time);

        if(this.ogtime == -1){
          this.ogtime = this.time;
        }


        //Finding time elapsed
        this.timenum = this.time - this.ogtime;

        console.log(this.timenum);

        var d = new Date(this.timenum);
        var hours = "" + d.getUTCHours();
        var minutes =  "" + d.getUTCMinutes();
        var seconds = "" + d.getUTCSeconds();

        if(d.getUTCMinutes() < 10){
          minutes = "0" + minutes;
        }
        if(d.getUTCSeconds() < 10){
          seconds = "0" + seconds;
        }

        var my_time = hours + ":" + minutes + ":" + seconds;

        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.time = position.timestamp;

        this.myTime = my_time;

        this.loc_time = [this.timenum , this.lat, this.lng];
        this.arr.push(this.loc_time);
        //console.log(this.arr);

        //Finding distance travelled
        if(this.oldlat != 0 && this.oldlng != 0){
          var earthRadius = 6371;
          var lat_delta = (this.lat - this.oldlat)*(Math.PI/180);
          var lng_delta = (this.lng - this.oldlng)*(Math.PI/180);

          var a =
				      Math.sin(lat_delta/2) * Math.sin(lat_delta/2) +
				      (Math.cos((this.lat)* (Math.PI/180))) * (Math.cos((this.oldlat)* (Math.PI/180))) *
				      Math.sin(lng_delta/2) * Math.sin(lng_delta/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var km = earthRadius * c;

          var miles = km * 0.621371192;
				  this.distance += miles;
          console.log(this.distance);
        }

        this.oldlat = this.lat;
        this.oldlng = this.lng;
        //----------------------------------------------------


      });

    });

  }

  stopTracking() {
    this.finalTime = this.myTime;
    this.finalDist = this.distance;
    console.log('stopTracking');
    console.log("Final Time: " + this.finalTime);
    console.log("Final Distance: " + this.finalDist);
    this.storage.set('lastDistance', this.finalDist);
    this.storage.set('lastTime', this.finalTime);

    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();

  }

}
