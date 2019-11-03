import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiohangService {
  items = [];
  url='/assets/guitar.json';  
  addToCart(giohang) {
    this.items.push(giohang);
  } 
  getItems() {
    return this.items;
  } 
  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get('/assets/guitar.json')
  }
  getAllcategories(){
    return this.http.get('/assets/categories.json')
  }
}