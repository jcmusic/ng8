import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { Ingredient } from '../../../shared/ingredient.model';
import { RecipeService } from '../../recipe.service';
import { ShoppingListService } from '../../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [ShoppingListService]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    // this.shoppingListService.i = this.recipe.ingredients;
    this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredient: Ingredient) => {
          this.recipe.ingredients.push(ingredient);
        }
      )
    }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
