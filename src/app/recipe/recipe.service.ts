import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';



export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Asian Stake Recipe', 'Using this Recipe you can cook delicious Stake in less than an hour of cooking',
            'http://cdn.differencebetween.net/wp-content/uploads/2016/05/640px-Tradicinis_didkepsnis_restorane_STEAKHOUSE_HAZIENDA.jpg'),
        new Recipe('Biryani', 'This is recipe to cook Asian Biryani in no time and enjoy delicious Meal with less effort',
            'https://i.pinimg.com/236x/4f/b9/00/4fb900817e2c58a76b19db11576498b9.jpg')
    ];


    getRecipe() {
        return this.recipes.slice();
    }

}