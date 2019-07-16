import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
  }

  toShoppingList(){
    console.log('sending ingredients to the shoppingList');
    // this.recipe.ingredients.forEach(
    //   (ingredient) => {
    //     this.shoppingListService.addIngredient(ingredient);
    //   }
    // );
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
