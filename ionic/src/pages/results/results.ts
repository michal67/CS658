import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public locationTracker: LocationTracker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  launchAboutPage() {
    const myAbout = this.modalCtrl.create(AboutPage);
    myAbout.present();
  }

  launchHomePage() {
      this.start();
      this.navCtrl.pop();
  }

  start(){
    this.locationTracker.startTracking();
  }

  stop(){
    this.locationTracker.stopTracking();
  }

}
