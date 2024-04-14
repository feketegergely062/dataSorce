import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regModel:any={}
  visible:boolean=true;
  changetype:boolean=true;
  
  constructor(private auth:AuthService,private toastr:ToastrService,private router:Router){}
  register(){
   
     this.auth.register(this.regModel)
     this.toastr.success('Köszönjük hogy regisztráltál!')
     this.router.navigate(['']);
   }
   viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
   }
}
