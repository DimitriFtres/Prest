import {ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  host: {
    'data-slate-node': 'text'
  }
})
export class NewsComponent implements OnInit {

  ngOnInit(): void {
    // implementer l'ajout dans le fil d'actualités
  }


}
