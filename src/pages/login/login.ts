import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  password : string
   error1: boolean
   erroerMessage:string = '';

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController,
    private itsAuth : AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');



  }
  ok1(){
    this.error1 = false

  }

  ok() {
  
   if(this.password == "123456" ){
    this.presentPrompt();
   // localStorage.setItem("log","true");
   //this.navCtrl.push(TabsPage)
    console.log("good :: "+this.password)
   } else{
     this.error1 = true
     this.erroerMessage = " الرقم السري الذي أدخلتة خطأ أعد الكتابة"
   }
  
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: cancil => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            this.itsAuth.auth.
            signInWithEmailAndPassword(data.username, data.password)
            .catch((xerorr)=>{
             this.erroerMessage = xerorr
             this.error1 = true

            }).then(()=>{
              if(this.error1 != true){
              this.navCtrl.push(TabsPage);
              }
            })
              // logged in!
            
          }
        }
      ]
    });
    alert.present();
  }
/** 
  logout(){
    this.itsAuth.auth.signOut()
  }
  */
}
