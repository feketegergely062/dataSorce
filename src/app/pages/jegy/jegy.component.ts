import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export interface Element {
  name: string;
  position: number;
  country: string;
  score: number;
}
export interface PeriodicElement {
  name: string;
  position: number;
  top: number;
  location: string;
}

const ELEMENT_DATA1: Element[] = [
  { position: 1, name: 'Pottelet Stéphane', country: 'Francia', score: 11 },
  { position: 2, name: 'Csillag László', country: 'Magyar', score: 65 },
  { position: 3, name: 'Prandi Giuliano', country: 'Olasz', score: 14 },
  { position: 4, name: 'Walter Tamás', country: 'Magyar', score: 10 },
  { position: 5, name: 'Szákovics Imre', country: 'Magyar', score: 125 },
  { position: 6, name: 'Jones Rory', country: 'Angol', score: 51 },
  { position: 7, name: 'Perko Alan', country: 'Horvát', score: 51 },
  { position: 8, name: 'Monsigny Thomas', country: 'Francia', score: 12 },
  { position: 9, name: 'Ifj. Hamar Ferenc', country: 'Magyar', score: 51 },
  { position: 10, name: 'Kisjuhász Bence', country: 'Magyar', score: 51 },
];

const ELEMENT_DATA2: PeriodicElement[] = [
  { position: 1, name: 'Carpmania Sporthorgász Centrum  ', top: 9.7, location: 'Pécs' },
  { position: 2, name: 'Urfish Horgászáruház ', top: 9.6, location: 'Székesfehérvár' },
  { position: 3, name: 'Hal.hu A horgászok boltja ', top: 9.4, location: 'Siófok' },
  { position: 4, name: 'Halcatraz Webáruház és Horgászcentrum ', top: 9.6, location: 'Nyíregyháza' },
  { position: 5, name: ' Rácvárosi Horgászbolt', top: 9.4, location: 'Pécs' },
  { position: 6, name: 'Haldorádó Centrum ', top: 9.6, location: 'Kiskunhalas' },
  { position: 7, name: 'TLK Horgászáruház', top: 9.7, location: 'Érd' },
  { position: 8, name: ' K-Fish Horgászcentrum', top: 9.4, location: 'Szeged' },
  { position: 9, name: 'Horgász-Zóna horgászbolt és webáruház ', top: 9.5, location: 'Budapest' },
  { position: 10, name: 'Megapeca Horgászáruház ', top: 9.6, location: 'Kecskemét' },
];

@Component({
  selector: 'app-jegy',
  templateUrl: './jegy.component.html',
  styleUrls: ['./jegy.component.css']
})

export class JegyComponent {

  displayedColumns1: string[] = ['position', 'name', 'country', 'score'];
  displayedColumns2: string[] = ['position', 'name', 'top', 'location'];

  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;

  currentContent: string = 'ticket'; // Kezdeti tartalom beállítása

  changeContent(content: string): void {
    this.currentContent = content;
  }
  constructor(private spinner: NgxSpinnerService) { }

  openSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3500)
  }
}
