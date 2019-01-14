import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ModalController } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import{DataInfoProvider} from '../../providers/data-info/data-info';
import { EditPage } from '../edit/edit';


@IonicPage()
@Component({
  selector: 'page-allinfo',
  templateUrl: 'allinfo.html',
})
export class AllinfoPage {
 
  x : object
  infoEdit : string;
  itRemoved: boolean;   
  
  data:any ={
  
    name :'',
    phone: '' ,
    province:'',
    letter: '',
    price :'',
    numberOfCAse:'',
    imageUrl:''

  }
  //price : string = ""
 // nuCase : string = ""

  constructor(public navCtrl: NavController,public navParams: NavParams,
   public modalCtrl: ModalController, private dp : DataInfoProvider,
    private imageViewerCtrl: ImageViewerController,
    public alertContr:AlertController) {
     

   
    this.x = dp.myObject

    if(this.x==null||this.x==undefined){
     
      this.itRemoved = true

    }

  
    //console.log(this.x)
    //console.log(this.x[0][1].name)
    //console.log(dp.myObject[1]['name'])


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AllinfoPage');
  }




  presentImage(myImage) {
  
       const imageViewer = this.imageViewerCtrl.create(myImage);
       imageViewer.present();
   }
   

   acceptable(){
     console.log("theres accept method")

     this.data.name = this.x[0][1].name;
     this.data.phone = this.x[0][1].phone;
     this.data.province = this.x[0][1].province;
     this.data.letter = this.x[0][1].letter;
     this.data.imageUrl = this.x[0][1].imageUrl;
     //this.data.price = this.price;
    // this.data.numberOfCAse = this.nuCase;
   
     if(this.data == null || this.data == undefined 
     ||this.data.price == "" || this.data.numberOfCAse == "" ) {
    
      alert("الرجاء أدخال البيانات المطلوبة")
   
    } else {

    this.dp.ADD(this.data)
    this.navCtrl.pop()
    //.then(()=>{
    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
  //})
   }

    



  }

   

   delete(imgUr){

    
      
          this.x= Object.entries("nodata")
          this.presentAlert(imgUr)

          
       console.log("theres delete method")
    


  }

 
  showEdit(name , phone , province , title ) {
    let profileModal = this.modalCtrl.create
    (EditPage,
     { name : name,
      phone : phone,
      province : province,
      letter   : title });
    profileModal.present();
  }
 
/** 

  edit(data){
    this.dp.EDIT(data)
    console.log("theres Edit method")
  }


  showEdit( nm , ph , pr , title ) {

    let prompt = this.alertContr.create({
      title: 'تعديل',
      message: "التعديل على المعلومات الحالية ",

      inputs: [
        {
          name: 'name',
          value:  nm
        },
        {
          name: 'phone',
          value: ph
        },
        {
          name: 'province',
          value:  pr
        },
         {
          name: 'title',
          value:  title
        },
      ],

      buttons: [
        {

          text: 'Cancel',
         
        },
        {
          text: 'Save',
          handler: save => {
           this.data.name = save.name,
           this.data.phone = save.phone,
           this.data.province = save.province,
           this.data.letter   = save.title
           this.edit(this.data)
           console.log(this.data)
          }
        }
      ]
    });

    prompt.present();

}
*/
presentAlert(imgUr) {
  let alert = this.alertContr.create({
    title: 'تأكيد الحذف',
    buttons: [
      {
        text: 'حذف',
         handler: ()=> {
          console.log('Cancel clicked');
          this.navCtrl.pop().then(()=>{
            this.dp.DELETE();
            this.dp.deleteIamgeFromStorge(imgUr);
          })
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



passDataAlert() {
  let alert = this.alertContr.create({
    title: 'تأكيد الموافقة',
    buttons: [
      {
        text: 'موافق',
         handler: ()=> {
          console.log('ok clicked');
         this.acceptable();
        
        }
      },{

        text: 'الغاء',
        handler: ()=> {
         console.log('Cancel Clicked');
        
        } 

      }
     
             ]

    
  });
  alert.present();
}









}
