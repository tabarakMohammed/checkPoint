import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AllinfoPage } from '../pages/allinfo/allinfo';
import{EditPage} from '../pages/edit/edit'
import{ShowHelpPage} from '../pages/show-help/show-help'
import{MoreHelpPage} from '../pages/more-help/more-help'




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';


import { DataInfoProvider } from '../providers/data-info/data-info';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from 'angularfire2/auth';




var config = {
  apiKey: "AIzaSyB3hA7VZaF46I38unRjszWXKVzsClYrXjk",
  authDomain: "ionic3-da65a.firebaseapp.com",
  databaseURL: "https://ionic3-da65a.firebaseio.com",
  projectId: "ionic3-da65a",
  storageBucket: "ionic3-da65a.appspot.com",
  messagingSenderId: "692007847742"
};


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    AllinfoPage,
    EditPage,
    ShowHelpPage,
    MoreHelpPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    IonicImageViewerModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    AllinfoPage,
    EditPage,
    ShowHelpPage,
    MoreHelpPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AngularFireStorageModule,
    AngularFireStorage,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataInfoProvider
   
    

    
  ]
})
export class AppModule {}
