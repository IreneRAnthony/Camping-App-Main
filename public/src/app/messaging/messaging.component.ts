import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Observable , Subscription} from 'rxjs';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})

// used for sockets 
export class MessagingComponent implements OnInit , OnDestroy{
  documents : Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, 
    private _router: Router) { }

  ngOnInit() {
    this.documents = this._httpService.documents;
    this._docSub = this._httpService.currentDocument.subscribe(doc => this.currentDoc = doc.id);
  }

  ngOnDestroy(){
    this._docSub.unsubscribe();
  }
  loadDoc(id: string){
    this._httpService.getDocument(id);
  }
  newDoc(){
    this._httpService.newDocument();
  }

}
