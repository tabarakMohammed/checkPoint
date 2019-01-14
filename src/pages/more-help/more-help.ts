import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import{DataInfoProvider} from '../../providers/data-info/data-info';

/**
 * Generated class for the MoreHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more-help',
  templateUrl: 'more-help.html',
})
export class MoreHelpPage {

  object : string
  constructor(public navCtrl: NavController, 
    private dp : NavParams) {

      this.object = this.dp.get('comment')
      console.log(this.dp.get('comment'))
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreHelpPage');
  }
  back(){
    this.navCtrl.pop()
  }
}
