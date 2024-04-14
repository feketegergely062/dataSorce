import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  top: number;
  location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Carpmania Sporthorgász Centrum  ', top: 9.7, location: 'Pécs'},
  {position: 2, name: 'Urfish Horgászáruház ', top: 9.6, location: 'Székesfehérvár'},
  {position: 3, name: 'Hal.hu A horgászok boltja ', top: 9.4, location: 'Siófok'},
  {position: 4, name: 'Halcatraz Webáruház és Horgászcentrum ', top: 9.6, location: 'Nyíregyháza'},
  {position: 5, name: ' Rácvárosi Horgászbolt', top: 9.4, location: 'Pécs'},
  {position: 6, name: 'Haldorádó Centrum ', top: 9.6, location: 'Kiskunhalas'},
  {position: 7, name: 'TLK Horgászáruház', top:9.7, location: 'Érd'},
  {position: 8, name: ' K-Fish Horgászcentrum', top: 9.4, location: 'Szeged'},
  {position: 9, name: 'Horgász-Zóna horgászbolt és webáruház ', top: 9.5, location: 'Budapest'},
  {position: 10, name: 'Megapeca Horgászáruház ', top: 9.6, location: 'Kecskemét'},
];


@Component({
  selector: 'app-fishing-shop',
  templateUrl: './fishing-shop.component.html',
  styleUrls: ['./fishing-shop.component.css']
})
export class FishingShopComponent {
  displayedColumns: string[] = ['position', 'name', 'top', 'location'];
  dataSource = ELEMENT_DATA;
}
