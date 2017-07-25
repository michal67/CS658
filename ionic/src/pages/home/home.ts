import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { AboutPage } from '../about/about';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public locationTracker: LocationTracker) {

  }

  launchSecondPage() {
      this.navCtrl.push(SecondPage);
      this.start();
  }

  launchAboutPage() {
      const myAbout = this.modalCtrl.create(AboutPage);
      myAbout.present();
  }

  start(){
    this.locationTracker.startTracking();
  }

  stop(){
    this.locationTracker.stopTracking();
  }

}
