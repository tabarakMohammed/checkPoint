import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  myObject:object
  noData:boolean

  constructor(public navCtrl: NavController, 
    private db:AngularFireDatabase,public alertContr:AlertController
    ) {

    this.showData()
  }


  showData(){
 
     this.db.object('/dataPass/passedInfo').snapshotChanges().subscribe(actions =>{
      if(actions.payload.val() != null||actions.payload.val() != undefined){
       this.myObject = Object.entries(actions.payload.val())
      console.log(this.myObject)
      } else {
        this.noData=true
      }
});
  }




  Acceptdelete(y)  {
    console.log("delete"+y)
    this.db.list('/dataPass/passedInfo').remove(y)
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


  moreInfo(x){
console.log('moreINFO'+x)
  }
}
