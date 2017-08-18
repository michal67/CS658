import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  
  launchAboutPage() {
      const myAbout = this.modalCtrl.create(AboutPage);
      myAbout.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
