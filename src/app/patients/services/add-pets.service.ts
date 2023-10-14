import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddPetsService {
url = "http://localhost:3000/patient";
  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get(this.url);
  }
  postData( data:any){
    return this.http.post('http://localhost:3000/patient',data);
  }
}
