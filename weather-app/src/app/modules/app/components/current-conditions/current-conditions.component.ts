import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsService } from '../../../../services/locations.service';
import { CurrentCondition } from '../../../models/current-conditions';

@Component({
  selector: 'app-current-conditions',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit{
  public currentConditions!: CurrentCondition[];
  // TODO: remove this after we create the dropdown 
 readonly ID: number = 264120;

 constructor(private locationService: LocationsService) {}

 ngOnInit(): void {
   this.locationService.getCurrentCondition(this.ID).subscribe((currentConditions) => {
    this.currentConditions = currentConditions;
    console.log(currentConditions);
   })
 }
}
