import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
  launchAboutPage() {
      const myAbout = this.modalCtrl.create(AboutPage);
      myAbout.present();
  }
}
