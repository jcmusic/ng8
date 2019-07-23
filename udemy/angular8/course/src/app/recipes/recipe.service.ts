import { Injectable, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject, Subscription } from 'rxjs';

// @Injectable({
//     providedIn: RecipesComponent,
// })
@Injectable()
export class RecipeService implements OnInit, OnDestroy {
    recipeSelected = new Subject<Recipe>();
    private recipeChangeSub: Subscription;
    private recipes : Recipe[] = [
        new Recipe(
            'Tasty Chilli', 
            'Homestyle chili', 
            'https://natashaskitchen.com/wp-content/uploads/2018/10/Beef-Chili-Recipe-3.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('beans', 1),
                new Ingredient('tomatoes', 2),
                new Ingredient('cheese', 1),
            ]),
        new Recipe(
            'Big Fat Burner', 
            'A super-awesome, hearty burger!', 
            'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.olocdn.net%2Fmenu%2Fapplebees%2Ffa3c0e6a03778631d0f1a5cd74f287e2.jpg&f=1',
            [
                new Ingredient('meat', 1),
                new Ingredient('bun', 1),
                new Ingredient('bacon', 2),
                new Ingredient('cheese', 1)
            ])
      ];
    
    constructor(){
        console.log('RecipeService CTOR');
    }

    ngOnInit(){
    //   console.log('Begin RecipeService Initialization');
    //   this.recipes = [
    //     new Recipe('A test recipe', 'This is simply a test', 'https://natashaskitchen.com/wp-content/uploads/2018/10/Beef-Chili-Recipe-3.jpg'),
    //     new Recipe('A 2nd test recipe', 'This is simply a test', 'https://natashaskitchen.com/wp-content/uploads/2018/10/Beef-Chili-Recipe-3.jpg')
    //   ];
    //   console.log('RecipeService Initialized');
    }
    ngOnDestroy() : void {

    }
    getRecipes(){
        return this.recipes.slice();  //returns a COPY of our array. - Reference type would allow change
    }
    getRecipe(index: number){
        return this.recipes[index]; 
    }
}