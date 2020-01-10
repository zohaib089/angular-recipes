import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
    ingredientAdded = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Sirlon Cut Beef', 200),
        new Ingredient('Meat', 2)
    ]


    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice())
    }
}