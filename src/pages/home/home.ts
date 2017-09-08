import { Component, Input } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';

import { OtherPage } from '../other/other' ;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myString: string = 'Example 1 - This is just a string.' ;
  @Input() public myJSON: any = {text: ''} ;
  otherPage: any = OtherPage ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  gotoOtherPage() {
  	this.navCtrl.push(OtherPage, {text: 'Example 3 - This is an object.'}) ;
  }

}

