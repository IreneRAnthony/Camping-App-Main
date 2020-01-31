import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})

export class DocumentListComponent implements OnInit , OnDestroy {
  // used for sockets 
  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;

  constructor(private httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  this.documents = this.httpService.documents;
  this._docSub = this.httpService.currentDocument.subscribe(doc => this.currentDoc = doc.id);
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  loadDoc(id: string) {
    this.httpService.getDocument(id);
  }

  newDoc() {
    this.httpService.newDocument();
  }


}
