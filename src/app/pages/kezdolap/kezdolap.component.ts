import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-kezdolap',
  templateUrl: './kezdolap.component.html',
  styleUrls: ['./kezdolap.component.css']
})
export class KezdolapComponent {
  constructor(private auth:AuthService){}
  
  regModel:any={}
  loginModel:any={}
  
  register(){
    let user= {
       "username": "JBela",
       "firstName": "Béla",
       "lastName": "Józsa",
       "email": "jbela@example.com",
       "password": "Almafa12;"
     }
     this.auth.register(this.regModel)
   }
 
   login(){
     let user={
       "username": "JBela",
       "password": "Almafa12;"
     }
     this.auth.login(this.loginModel)
   }
}
