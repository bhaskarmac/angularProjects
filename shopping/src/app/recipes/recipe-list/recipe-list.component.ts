import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Maggie', 'This is test nothing else', 'http://www.tasty-indian-recipes.com/wp-content/uploads/2014/05/Maggi-Vegetable-Atta-Noodles-Recipe.jpg'),
    new Recipe('Spring rolls', 'Spring rolls description', 'https://www.vegrecipesofindia.com/wp-content/uploads/2015/10/spring-rolls-recipe-2.jpg'),
    new Recipe('Some recipe', 'Some recipe description', 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
