import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OtherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(this.navParams.data) ;
  	console.log(this.navParams.get("text")) ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

  goBack() {
  	this.navCtrl.pop() ;
  }

}

