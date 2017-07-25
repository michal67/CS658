import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ResultsPage } from '../results/results';
import { AboutPage } from '../about/about';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public locationTracker: LocationTracker, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
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

}
