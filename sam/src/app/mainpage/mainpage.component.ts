import { Component, OnInit } from '@angular/core';
import { BackendCallService } from '../backend-call.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  password={
    digit:'',
    specialChar:'',
    lowerCase:'',
    upperCase:''
  }
  value='';
  status=false;

  constructor(private service:BackendCallService) { }
check=false;
  onSubmit(){

    this.check=(this.password.digit=='' || this.password.digit=='0') && (this.password.lowerCase=='' || this.password.lowerCase=='0') && (this.password.specialChar=='' || this.password.specialChar=='0') && (this.password.upperCase=='' || this.password.upperCase=='0');

    if(this.check) {
      alert("fields should not be empty")
    }

    else{
      this.service.getPassword(this.password).subscribe(
        (response:any)=>{
          this.value=response.res;
          this.status=true;
        },
        (error)=>{
          alert("invalid input...(every field shoulb be in range of 0-10 only)")
        }
      )
    }

  }
  ngOnInit(): void {
  }

}
