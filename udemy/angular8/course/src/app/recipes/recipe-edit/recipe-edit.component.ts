import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styles: []
})
export class RecipeEditComponent implements OnInit {
    recipe: Recipe;
    recipeIndex: number;
    // editMode: boolean;
    changesSaved: boolean;

    constructor(
        private route: ActivatedRoute,
        private recipeService:  RecipeService) {}

    ngOnInit(){
        this.route.params.subscribe(
            (params: Params) => {
                // this.recipeIndex = +params['index'];
                // this.editMode = params['index'] !=null;

                if(params['index']) {
                    this.recipeIndex = +params['index'];
                    this.recipe = this.recipeService.getRecipe(this.recipeIndex);
                } else {
                    this.recipeIndex = undefined;  //new
                }
            }
        )
    }
}