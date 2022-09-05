import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';
import { AddService } from 'src/app/services/add.service'; 
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  // reactiveForm:FormGroup
  // address:boolean=false
  getList: any;
  update:boolean=true;
  edit:boolean=false;
  
  

   

  // firstFormControl =new FormControl('degala',Validators.required);
  // lastFormControl =new FormControl ('mahesh',Validators.required);
  // emailFormControl = new FormControl('degalamahesh1479@gmail.com', [Validators.required, Validators.email]);
  // pincode=new FormControl('516360',Validators.required);
  // mobile=new FormControl('9603970840',[Validators.required, Validators.maxLength(10),Validators.minLength(10)]);
  // locality=new FormControl('bollavaram',Validators.required)
  // matcher = new ErrorStateMatcher();
  
  editResto=new FormGroup({
    name:new FormControl(''),
    mobile:new FormControl(''),
    pincode:new FormControl(''),
    locality:new FormControl(''),
    address:new FormControl(''),
    addressType:new FormControl(),
   
    city:new FormControl(''),
    state:new FormControl(''),
    landmark:new FormControl(''),
    alternate:new FormControl('')
   

  })
  activatedRouter: any;
  id: string;

  

  
  constructor( private addSer:AddService,private router:ActivatedRoute) { 
  
   }



 

 
 ngOnInit():void{


  this.addSer.getList().subscribe((res)=>{
    console.log("the result of get is",res);
    this.getList=res
  });
  
//   console.log ("i am in console");
// console.log(this.router.snapshot.params['id']);

// this.addSer.getCurrentResto(this.router.snapshot.params['id']).subscribe((result)=>{
//   console.log("the result is",result);
  
//   this.editResto=new FormGroup({
//     name:new FormControl(result['name']),
//     mobile:new FormControl(result['mobile']),
//     pincode:new FormControl(result['pincode']),
//     locality:new FormControl(result['locality']),
//     address:new FormControl(result['address']),
//     addressType:new FormControl(result['addressType']),
   
//     city:new FormControl(result['city']),
//     state:new FormControl(result['state']),
//     landmark:new FormControl(result['landmark']),
//     alternate:new FormControl(result['alternate']),

// });

 

// });

  
 


  // onSubmit(){
  //   console.log(this.reactiveForm)
  
  //  }

  //  window.location.reload();

  //  add(){
  //   this.address=!this.address
  //  }
 }
//  collection(){
//   console.log(this.editResto.value);
//   this.addSer.updateResto(this.activatedRouter.snapshot.params['id'], this.editResto.value).subscribe((result) => {
//     console.log("the result of result is",result);
// });
// }

editAddress(event:any){
this.edit=true;
this.update=true;    
// window.location.reload();
console.log ("i am in console");
// console.log(this.router.snapshot.params['id']);
this.id=event.target.value;
console.log("display of",this.id);

this.addSer.getCurrentResto(this.id).subscribe((result)=>{
  console.log("the result is",result);
  
  this.editResto=new FormGroup({
    name:new FormControl(result['name']),
    mobile:new FormControl(result['mobile']),
    pincode:new FormControl(result['pincode']),
    locality:new FormControl(result['locality']),
    address:new FormControl(result['address']),
    addressType:new FormControl(result['addressType']),
   
    city:new FormControl(result['city']),
    state:new FormControl(result['state']),
    landmark:new FormControl(result['landmark']),
    alternate:new FormControl(result['alternate']),

});

 

});
};

  collection() {
    console.warn(this.editResto.value);
    this.addSer.updateResto(this.id, this.editResto.value).subscribe((result) => {
      console.log(result);
    });
  };

close(){
this.edit=false;
this.update=true;
};

};




 
   
 








 
  



