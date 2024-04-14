import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxSpinnerService } from 'ngx-spinner';
export interface Element {
  name: string;
  position: number;
  discount: string;
  price: number;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Felnőtt', discount: 'Nincs', price: 3600 },
  {position: 2, name: 'Diák', discount: 'Van', price: 2400},
  {position: 3, name: 'Nyugdíjas', discount: 'Van', price: 2400},
  {position: 4, name: 'Gyerek,', discount: 'Ingyenes', price: 0},
  
];


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-discount','demo-price'];
  dataSource = ELEMENT_DATA;
  constructor(private spinner:NgxSpinnerService){}
  openSpinner(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    }, 3500)
  }
}
