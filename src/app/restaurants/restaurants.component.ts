import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IRestaurant } from '../share/interfaces';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  title: string;
  places: IRestaurant[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRestaurants()
      .subscribe((restaurants: IRestaurant[]) => this.places = restaurants);
  }

}
