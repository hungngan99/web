import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
 url = "./assets/guitar.json";
 infoGuitar:any;
 product:any;
 id;


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAll().subscribe (data =>{
      this.infoGuitar=data;
      this.product=this.infoGuitar.find(prama=>prama.id==this.id);
    })
  }
 getAll(){
   return this.http.get(this.url);
 }
}
