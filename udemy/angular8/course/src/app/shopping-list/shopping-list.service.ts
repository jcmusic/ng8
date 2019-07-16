import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

// @Injectable(
//     {providedIn: 'root', static: true; })
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.broadcastChange();
    }
    removeIngredient(index: number){
        console.log('removing ingredient at index=' + index);
        () => { 
            // this.ingredients = this.ingredients.splice(index, 1);
            this.ingredients.splice(index, 1);
        }
        this.broadcastChange();
    }
    // removeIngredients(){
    //     this.ingredients = [];
    //     this.broadcastChange();
    // }
    private broadcastChange(){
        console.log('broadcasting ingredientsChange');
        this.ingredientsChanged.emit(this.ingredients.slice());
        console.log(this.ingredients);
    }
}