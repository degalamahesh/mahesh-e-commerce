import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  url = "http://localhost:3000/user/"

  constructor(private http: HttpClient) { }

  saveResto(data) {
    return this.http.post(this.url, data)
  };

  getList() {
    return this.http.get(this.url)
  };

  //  getCurrentResto(id:any){
  //   return this.http.get(this.url+id)
  //  }

 public getCurrentResto(id: any) {
    console.log("i am in service",id);
    return this.http.get(this.url+id);
    // return this.http.get("http://localhost:3000/user/",id);
  };

  updateResto(id: any, data: any) {
    // return this.http.put(this.url+"/"+ id,data)
      return this.http.put(this.url+ id,data) 
  };
}
