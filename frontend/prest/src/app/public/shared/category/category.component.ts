import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "@category/Category";
import {CategoryService} from "../../../service/category/category.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories!: Category[];
  @Output("category")
  categoryEvent: EventEmitter<Category> = new EventEmitter<Category>();
  constructor(public categoryService : CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getList().subscribe(categories => {
      this.categories = categories;
      console.log("ok");
    });
  }
  selected(category: Category)
  {
    this.categoryEvent.emit(category);
  }
}
