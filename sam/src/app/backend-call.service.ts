import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendCallService {

  constructor (private http:HttpClient) { }

  getPassword(password:any){
    return this.http.post(`http://localhost:8080/password/generate`,password);
  }
}
