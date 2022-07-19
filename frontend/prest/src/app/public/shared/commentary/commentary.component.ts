import {Component, Input, OnInit} from '@angular/core';
import {Commentary} from "@commentary/Commentary";
import {CommentaryService} from "@service/commentary/commentary.service";
import {BehaviorSubject, of} from "rxjs";
import {User} from "@user/User";
import {CommentaryUpdatePayload} from "@commentary/CommentaryUpdatePayload";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RatingChangeEvent} from "angular-star-rating";


@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent implements OnInit {
  @Input() commentary?: Commentary;
  @Input() user?: User;
  modifyBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  formCommentary: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.required]),
  });

  note?: number;


  constructor(public commentaryService: CommentaryService) { }

  ngOnInit(): void {

  }

  deleteCommentary(){
    let commentaryUpdate = {
      id_commentary: this.commentary!.id_commentary,
      note: this.commentary!.note,
      text: this.commentary!.text,
      restaurant: this.commentary!.restaurant,
      user: this.commentary!.user,
      date: this.commentary!.date,
      actif: false
    } as CommentaryUpdatePayload
    this.commentaryService.update(commentaryUpdate).subscribe();
  }

  modifyCommentary(){
    this.formCommentary.setValue({
        text: this.commentary!.text
      });
    this.note = this.commentary!.note;
    this.modifyBehavior.next(true);
  }

  confirmModification()
  {
    let commentaryUpdate = {
      id_commentary: this.commentary!.id_commentary,
      note: this.note,
      text: this.formCommentary.value.text,
      restaurant: this.commentary!.restaurant,
      user: this.commentary!.user,
      date: this.commentary!.date,
      actif: true
    } as CommentaryUpdatePayload
    this.commentaryService.update(commentaryUpdate).subscribe();
    this.modifyBehavior.next(false);

  }

  ratingChange($event: RatingChangeEvent) {
    this.note = $event.rating;
  }

  cancelModification() {
    this.modifyBehavior.next(false);

  }
}
