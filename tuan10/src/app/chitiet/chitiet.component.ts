import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GiohangService } from '../giohang.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
  url = "./assets/guitar.json";
  infoGuitar:any;
  product:any;
  id;

  constructor(private http:HttpClient,private cart:GiohangService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getAll().subscribe (data =>{
      this.infoGuitar=data;
      this.route.paramMap.subscribe(params=>{
        this.id=+params.get('id');
      })
      this.product=this.infoGuitar.find(s=> s.id==this.id);
      
  })
}

getAll(){
  return this.http.get(this.url);

}
addToCart(){
  window.alert('Bạn đã thêm vào giỏ hàng.')
  this.cart.addToCart(this.product);
  console.log(this.cart);
}
}
