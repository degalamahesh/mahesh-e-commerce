import { Component, OnInit } from '@angular/core';
import { ProductService} from 'src/app/services/product.service'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
   product:any
  constructor(private httpSer:ProductService) { }

  ngOnInit(): void {
    this.httpSer.getAllProducts().subscribe((res:any)=>{
      console.log(res);
     this.product=res;
    })
  }

}
