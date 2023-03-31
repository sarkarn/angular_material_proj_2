import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginId=""
  public sucessClass ="text-success"
  public password;
  public greeting="";
  public display=true;
  public color="red"

  constructor(private _loginService : LoginService) { 

  }

  ngOnInit(): void {
  }

  onClick(event) {
    this.greeting="You are successfully Logged In"
    this.display=false;
    this.color="blue"
    this._loginService.login()
  }

}
