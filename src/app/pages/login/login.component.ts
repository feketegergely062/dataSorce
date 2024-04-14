import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel:any={}
  visible:boolean=true;
  changetype:boolean=true;

  constructor(private auth:AuthService,private spinner:NgxSpinnerService,private toastr:ToastrService,private router:Router){}
  
  login(){
      this.auth.login(this.loginModel)
      this.toastr.success('Sikeres Bejelentkezés!')
      this.router.navigate(['fooldal']);
  }
  openSpinner(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },3500)
  }
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
   }
}
