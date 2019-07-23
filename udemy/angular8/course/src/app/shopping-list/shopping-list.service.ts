import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

// @Injectable(
//     {providedIn: 'root', static: true; })
@Injectable()
export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients : Ingredient[] = [];
    // = [
    //     new Ingredient('Apples', 5),
    //     new Ingredient('Tomatoes', 10)
    // ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient){
        console.log('adding ingredient: ' + ingredient.name);
        this.ingredients.push(ingredient);
        this.broadcastChange();
    }
    addIngredients(ingredients: Ingredient[]){
        console.log('adding ' + ingredients.length + ' ingredients');
        this.ingredients.push(...ingredients);
        this.broadcastChange();
    }
    removeIngredient(index: number){
        console.log('removing ingredient at index=' + index);
        (index:number) => { 
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
        this.ingredientsChanged.next(this.ingredients.slice());
        console.log(this.ingredients);
    }
}