import { Injectable } from '@angular/core';
import emailjs  from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  sendMail(mail:any, message:any){
    let params:any={}
   params.to_mail=mail

   params.from_name="horgász-api"
   params.reply_to="mheiproject@gmail.com"
   params.secret_to="mheiproject@gmail.com"
   params.to_name="User"
   params.message=message
   params.html_content="<h1>Köszönjük, hogy megnézte az oldalt fontos a visszajelzése.</h1>"
   params.signature="Én"
   emailjs.send("service_8yvl5qs","template_wtfe7xp", params,"ud80RXh_eQAU_Nqzc").then(
     (res)=>console.log("Email OK",res)
   ).catch(
     (res)=>console.log("Hiba",res)
   )
 }
}
