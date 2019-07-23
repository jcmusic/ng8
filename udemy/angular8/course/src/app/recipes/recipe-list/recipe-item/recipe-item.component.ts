import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [ShoppingListService]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(
    private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    // this.shoppingListService.i = this.recipe.ingredients;
    this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.recipe.ingredients.push(...ingredients);
        }
      )
    }
}
