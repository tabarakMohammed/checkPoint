import { Component } from '@angular/core';
import { IonicPage, NavController,
   AlertController,NavParams,ModalController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { MoreHelpPage } from '../more-help/more-help';

/**
 * Generated class for the ShowHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-help',
  templateUrl: 'show-help.html',
})
export class ShowHelpPage {

  myObject:object
  noData:boolean

  
  constructor(public navCtrl: NavController, 
    private db:AngularFireDatabase,
    public alertContr:AlertController,
    public navParam:NavParams,
    private modalCtrl : ModalController
  ) {
    this.showData()
  }






  showData(){
 
     this.db.object('infoHelp').snapshotChanges().subscribe(actions =>{
      if(actions.payload.val() != null||actions.payload.val() != undefined){
       this.myObject = Object.entries(actions.payload.val())
      console.log(this.myObject)
      } else {
        this.noData=true
      }
});
  }



  Acceptdelete(y){
    console.log("delete"+y)
    this.db.list('infoHelp').remove(y)
   }


  delete(x) {
    let alert = this.alertContr.create({
      title: 'تحذير',
      subTitle:'هل أنت متأكد ؟ سيتم حذف البيانات',
      buttons: [
        {
          text: 'حذف',
           handler: ()=> {
            console.log('Cancel clicked');
            this.Acceptdelete(x);
           } 
           
          },{

            text: 'الغاء',
            handler: ()=> {
             console.log('Cancel ');
            
            } 

          }
         
      
               ]
    });
    alert.present();
  }


  moreInfo(x) {

    console.log('moreINFO :: '+ x)
     
      let profileModal = this.modalCtrl.create
      (MoreHelpPage,
       { comment : x});
      profileModal.present();
    
   
      }



}