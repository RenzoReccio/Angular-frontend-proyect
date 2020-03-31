import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IRestaurant } from '../share/interfaces';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurantForm : FormGroup;
  submit = false;
  title: string;
  places: IRestaurant[];
  saveRestaurant : IRestaurant[];
  constructor(private dataService: DataService,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.restaurantForm = this.formBuilder.group({
      name : ['', Validators.required],
      type : ['', Validators.required]
    });
    this.retrieveRestaurants();

  }

  onSubmit(){
    this.submit = true;
    if(this.restaurantForm.invalid){
      return
    }
    console.log(this.restaurantForm.value);
    this.dataService.saveRestaurant(
              this.restaurantForm.value.name,
              this.restaurantForm.value.type)
              .subscribe((restaurant : IRestaurant[]) => this.saveRestaurant = restaurant);
    this.retrieveRestaurants()
  }

  retrieveRestaurants(){
    this.dataService.getRestaurants()
      .subscribe((restaurants: IRestaurant[]) => this.places = restaurants);
  }

}
