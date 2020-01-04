import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Asian Stake Recipe', 'Using this Recipe you can cook delicious Stake in less than an hour of cooking',
      'http://cdn.differencebetween.net/wp-content/uploads/2016/05/640px-Tradicinis_didkepsnis_restorane_STEAKHOUSE_HAZIENDA.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
