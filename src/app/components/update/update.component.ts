import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/services/add.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  editResto = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    pincode: new FormControl(''),
    locality: new FormControl(''),
    address: new FormControl(''),
    addressType: new FormControl(),

    city: new FormControl(''),
    state: new FormControl(''),
    landmark: new FormControl(''),
    alternate: new FormControl('')


  })

  dispaly: boolean = true

  constructor(private addser: AddService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log("i am in update in ngOnit");
    // console.log(this.activatedRouter.snapshot.params['id']);
    // // this.addser.getCurrentResto(this.router.snapshot.params['id']).subscribe((result:any
    // //   )=>{

    // this.addser.getCurrentResto(this.activatedRouter.snapshot.params['id']).subscribe((result: any) => {
    //   // console.log("i am in result");
    //   console.log(result);


    //   this.editResto = new FormGroup({
    //     name: new FormControl(result['name']),
    //     mobile: new FormControl(result['mobile']),
    //     pincode: new FormControl(result['pincode']),
    //     locality: new FormControl(result['locality']),
    //     address: new FormControl(result['address']),
    //     addressType: new FormControl(result['addressType']),

    //     city: new FormControl(result['city']),
    //     state: new FormControl(result['state']),
    //     landmark: new FormControl(result['landmark']),
    //     alternate: new FormControl(result['alternate'])


    //   });

    // });


 

  };

  // collection(){
  //      console.log(this.editResto.value)
  //  };



  // update() {
  //   console.warn(this.editResto.value);
  //   this.addser.updateResto(this.activatedRouter.snapshot.params['id'], this.editResto.value).subscribe((result) => {
  //     console.log(result);
  //   });
  // };


  // close() {
  //   this.dispaly = false
  // };

}
