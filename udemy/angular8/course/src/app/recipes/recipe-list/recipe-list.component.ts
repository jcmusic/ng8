import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://natashaskitchen.com/wp-content/uploads/2018/10/Beef-Chili-Recipe-3.jpg'),
    new Recipe('A 2nd test recipe', 'This is simply a test', 'https://natashaskitchen.com/wp-content/uploads/2018/10/Beef-Chili-Recipe-3.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
