import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-host',
  templateUrl: './registration-host.component.html',
  styleUrls: ['./registration-host.component.css']
})
export class RegistrationHostComponent implements OnInit {
  public phone = '';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  public checkPhoneAndRedirect(){
    this.httpClient.get
    (
      'http://localhost:1337/parse/classes/Customer',
      {
        headers: {
          "X-Parse-Application-Id": "super_time",
          "X-Parse-REST-API-Key": "diaz06041994"
        },
        params: { 'where':'{"Phone": "'+this.phone+'"}' } 
      }
    ).subscribe((res:any)=>{
      if(res){
        if(res.results.length > 0) {
          console.log("User already registered");
        }
        else{
          console.log("User not registered. Register?")
        }
      }
    });
  }
}
