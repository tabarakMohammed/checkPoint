import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DataInfoProvider} from '../../providers/data-info/data-info';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  data:any ={
  
    name :'',
    phone: '' ,
    province:'',
    letter: '' 
  }

  constructor(public navCtrl: NavController,
     public navParams: NavParams, private dp : DataInfoProvider) {
              this.passData();
      console.log('name', navParams.get('name'));
      console.log('phone', navParams.get('phone'));
      console.log('province', navParams.get('province'));
      console.log('title', navParams.get('letter'));



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }
  back(){
    this.navCtrl.pop()
  }
     
   passData(){
     this.data.name = this.navParams.get('name');
     this.data.phone = this.navParams.get('phone');
     this.data.province = this.navParams.get('province');
     this.data.letter = this.navParams.get('letter');


   }

   reWrite(){
        console.log('Edit :: '+this.data.name)
        console.log('Edit :: '+this.data.phone)
        console.log('Edit :: ' + this.data.province)
        console.log('Edit :: '+ this.data.letter)
        this.dp.EDIT(this.data)
        .then(()=>{
          this.navCtrl.pop()
        })

   }
    
}
