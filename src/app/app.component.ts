import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'designguitar';
  product:any;
  url = "./assets/categories.json"
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.getAll().subscribe (data =>{
      this.product=data
    })
  }
 getAll(){
   return this.http.get(this.url);
 }
}


