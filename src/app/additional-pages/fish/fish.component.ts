import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';



@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent {
  panelOpenState = false;
}

