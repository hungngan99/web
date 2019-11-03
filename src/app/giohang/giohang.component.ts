import { Component, OnInit } from '@angular/core';
import { GiohangService } from '../giohang.service';
@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {
  product:any;
  constructor(private cart:GiohangService ) {}

  ngOnInit() {
    this.product=this.cart.getItems();
    console.log(this.product);
  }
  delete(iddd){
    var a = confirm ('bạn có muốn xóa sản phẩm này không');
    if ( a == true){
      const index= this.product.findIndex( p => p.Id === iddd);
      this.product.splice(index , 1);
    } else {
      return false;
    }
  }
  TotalPrice() {
    let s = 0;
    this.product.forEach(function (d) {
      s = s + d.price * d.sl
    })
    return s;
  }
  increase(ID) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].cid == ID) {
        this.product[i].sl++;
      }
    }
  }
  reduction(ID) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].cid == ID && this.product[i].sl > 0) {
        this.product[i].sl--;
      }
    }
  }
}


