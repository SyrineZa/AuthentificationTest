//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //newdata:any;
  constructor(/*private _http:HttpClient*/ private route: ActivatedRoute) { }
  //getData(){
    //return this._http.get("https://www.shodan.io/search?query=");
  //}

  ngOnInit(): void {
  //this.getData().subscribe(res=>{
    //this.newdata=res;
  //})
  }
 

}
