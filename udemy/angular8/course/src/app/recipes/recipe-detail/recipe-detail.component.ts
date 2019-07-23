import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeIndex: number;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        // this.recipe = this.recipeService.getRecipes()[params['index']];
        this.recipeIndex = +params['index'];
        this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        console.log('index: ' + params['index'] + ' - ' + JSON.stringify(this.recipe));
      }
    );
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
  toEditRecipe(){
      this.router.navigate(['edit'],{relativeTo: this.route});
  }
}
