import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';



@Injectable()
export class DataInfoProvider {
  
   key: string
   myObject: object
   list1 : AngularFireList<any>;
   itsdeleted: boolean
  constructor(private db: AngularFireDatabase,
    public sd : AngularFireStorage) {

    console.log('Hello DataInfoProvider Provider');

  }

 
  gitEq(x){
    this.key = x;
    this.db.list('info');
    this.db.database.ref('info')
   .orderByKey().equalTo(this.key)

   .on("value", (snapshot) => {

    if(snapshot.val()!= null||snapshot.val()!= undefined)
   {

   // alert('تمت العملية بنجاح')
   this.myObject = Object.entries(snapshot.val())

   } //else { this.myObject = Object.entries(snapshot.val())  }
   
  });  

}

ADD(data){

this.db.list('/dataPass/passedInfo').push(data).then(()=>{

alert("تمت الموافقة و نقل البيانات الى الحقل الرئيسي")
this.DELETE()

})
console.log(data)

}


EDIT(info){
 //  info.key = this.key
 return this.db.list('info').update(this.key,info).catch((errorr)=>{

    alert(errorr)

  }).then(()=>{

 alert("تم التعديل")

  })

}

DELETE(){

  return this.db.list('info').remove(this.key).then( ()=>{
    
    alert("تم الحذف من الحقل الأبتدائي")

})

}

 deleteIamgeFromStorge(urlToDelete){
  this.sd.storage.refFromURL(urlToDelete).delete().then( () => {
    // successful deletion
    alert('تم حذف الصورة بنجاح')
}).catch( err => {
    // handle err
    alert(err)
})
 }

}
