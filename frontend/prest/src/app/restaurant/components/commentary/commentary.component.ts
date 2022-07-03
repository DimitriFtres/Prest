import {Component, Input, OnInit} from '@angular/core';
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
  @Input() commentary?: Commentary;
  constructor() { }

  ngOnInit(): void {
  }

}
