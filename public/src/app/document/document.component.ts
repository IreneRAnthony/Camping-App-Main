import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs';
import { Document } from '../document';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})

// added for sockets 
export class DocumentComponent implements OnInit , OnDestroy {
  document : Document ;
  private _docSub: Subscription;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this._docSub = this.httpService.currentDocument.pipe(
      startWith({ id: '', doc: ''})
    ).subscribe(document=>this.document = document);
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  editDoc() {
    this.httpService.editDocument(this.document);
  }

}
