import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Commentary} from "@commentary/Commentary";
import {CommentaryService} from "@service/commentary/commentary.service";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent implements OnInit {

  commentaries?: Commentary[];
  constructor(public activatedRoute: ActivatedRoute,
              public commentaryService: CommentaryService) { }

  ngOnInit(): void {
    let restaurant_id = this.activatedRoute.snapshot.params.get('restaurant');
    this.activatedRoute.params.pipe(
      switchMap((param: Params) => {
        if(param['restaurant'])
          return this.commentaryService.getListFromRestaurant(param['restaurant']);
        else
          return of({} as Commentary[]);
      })
    ).subscribe(commentaries => {
      this.commentaries = commentaries;
    })
    this.commentaryService.getListFromRestaurant(restaurant_id).subscribe(commentaries => {
      this.commentaries = commentaries;
    });
  }

}
