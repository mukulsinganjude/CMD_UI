import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
 url = "http://localhost:3000/dashboard";
 url2 = "http://localhost:3000/dashboardDoctor";
  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get(this.url);
  }
  getData2() {
    return this.http.get(this.url2);
  }
}
