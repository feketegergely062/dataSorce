import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Element {
  name: string;
  position: number;
  country: string;
  score: number;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Pottelet Stéphane', country: 'Francia', score: 11},
  {position: 2, name: 'Csillag László', country: 'Magyar', score: 65},
  {position: 3, name: 'Prandi Giuliano', country: 'Olasz', score: 14},
  {position: 4, name: 'Walter Tamás', country: 'Magyar', score: 10},
  {position: 5, name: 'Szákovics Imre', country: 'Magyar', score: 125},
  {position: 6, name: 'Jones Rory', country: 'Angol',score: 51},
  {position: 7, name: 'Perko Alan', country: 'Horvát', score: 51},
  {position: 8, name: 'Monsigny Thomas', country: 'Francia', score: 12},
  {position: 9, name: 'Ifj. Hamar Ferenc', country: 'Magyar', score: 51},
  {position: 10, name: 'Kisjuhász Bence', country: 'Magyar', score: 51},
];

@Component({
  selector: 'app-versenyek',
  templateUrl: './versenyek.component.html',
  styleUrls: ['./versenyek.component.css'],
})
export class VersenyekComponent {
  displayedColumns: string[] = ['position', 'name', 'country', 'score'];
  dataSource = ELEMENT_DATA;
}
