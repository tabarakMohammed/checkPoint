import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AllinfoPage } from '../allinfo/allinfo';
import { AngularFireDatabase } from '@angular/fire/database';
import{DataInfoProvider} from '../../providers/data-info/data-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemsRef:any;
  myObject:object
  info = <any>[]
  noData:boolean;
  constructor(public navCtrl: NavController, private db:AngularFireDatabase,
    private dp : DataInfoProvider) {

      
      this.showData();
  
    }

  showData(){
 
    this.itemsRef = this.db.object('info');
    this.itemsRef.snapshotChanges().subscribe(actions =>{
      if(actions.payload.val() != null||actions.payload.val() != undefined){
       this.myObject = Object.entries(actions.payload.val())
      console.log(this.myObject)
      } else {
        this.noData=true
      }
});
  }

  ShowAllInfo(x){
    this.navCtrl.push(AllinfoPage);
    this.dp.gitEq(x)
    console.log(x)
  }





}
