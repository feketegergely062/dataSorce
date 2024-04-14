import { Component } from '@angular/core';
import { MailService } from '../../mail.service';


@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
  styleUrls: ['./kapcsolat.component.css']
})
export class KapcsolatComponent {
  email:any
  message:any
  constructor(private mail:MailService){

  }

  sendMail(){
    this.mail.sendMail(this.mail,this.message);
  }
 
}
