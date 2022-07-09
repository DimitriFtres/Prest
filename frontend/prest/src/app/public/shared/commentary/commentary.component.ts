import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Commentary} from "@commentary/Commentary";
import {CommentaryService} from "@service/commentary/commentary.service";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {User} from "@user/User";
import {CommentaryUpdatePayload} from "@commentary/CommentaryUpdatePayload";


@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent implements OnInit {
  @Input() commentary?: Commentary;
  @Input() user?: User;
  constructor(public commentaryService: CommentaryService) { }

  ngOnInit(): void {

  }

  deleteCommentary(commentary: Commentary){
    let commentaryUpdate = {
      id_commentary: commentary.id_commentary,
      note: commentary.note,
      text: commentary.text,
      restaurant: commentary.restaurant,
      user: commentary.user,
      date: commentary.date,
      actif: false
    } as CommentaryUpdatePayload
    this.commentaryService.update(commentaryUpdate).subscribe();
  }

  modifyCommentary(commentary: Commentary){
    //creer un modal pour modifier le commentaire
  }

}
