import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from 'src/app/services/add.service'


@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  
   
  //  post:FormGroup
  //  matcher:any



  //  this.post=new FormGroup({
  //   firstFormControl =new FormControl('',Validators.required);
  //   lastFormControl =new FormControl ('',Validators.required);
  //   emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  //   pincode=new FormControl('516360',Validators.required);
  //   mobile=new FormControl('9603970840',[Validators.required, Validators.maxLength(10),Validators.minLength(10)]);
  //   locality=new FormControl('bollavaram',Validators.required)
  
  //   matcher = new ErrorStateMatcher();
  //  });

  // firstFormControl =new FormControl('',Validators.required);
  // lastFormControl =new FormControl ('',Validators.required);
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // pincode=new FormControl('516360',Validators.required);
  // mobile=new FormControl('9603970840',[Validators.required, Validators.maxLength(10),Validators.minLength(10)]);
  // locality=new FormControl('bollavaram',Validators.required)

  // matcher = new ErrorStateMatcher();

    addResto=new FormGroup({
      name:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required),
      locality:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      addressType:new FormControl('',Validators.required),
     
      city:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      landmark:new FormControl('',Validators.required),
      alternate:new FormControl('',Validators.required)
     

    })
  collection: any;
  constructor(private addSer: AddService) { }

  ngOnInit(): void { 

    // this.post=new FormGroup({
    //   firstFormControl:new FormControl('',Validators.required),
    //   lastFormControl :new FormControl ('',Validators.required),
    //   emailFormControl : new FormControl('', [Validators.required, Validators.email]),
    //   pincode:new FormControl('516360',Validators.required),
    //   mobile:new FormControl('9603970840',[Validators.required, Validators.maxLength(10),Validators.minLength(10)]),
    //   locality:new FormControl('bollavaram',Validators.required),
    //   // matcher : new ErrorStateMatcher(),
    //  });
   


  }
  collectResto(){
    // console.log(this.addResto.value)
    this.addSer.saveResto(this.addResto.value).subscribe((result)=>{
      console.log(result);
      this.collection=result;
    })
   }
 





}
