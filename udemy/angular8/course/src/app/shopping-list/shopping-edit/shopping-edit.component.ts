import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static:false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static:false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const newIngredient = new Ingredient(
        this.nameInputRef.nativeElement.value, 
        this.amountInputRef.nativeElement.value);
        // console.log ('Ingredient Added:');
        // console.log (newIngredient);
        this.shoppingListService.addIngredient(newIngredient)
  }
  onRemoveItem(index: number){
        this.shoppingListService.removeIngredient(index);
  }
}
