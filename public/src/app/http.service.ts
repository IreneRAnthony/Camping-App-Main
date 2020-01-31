import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { Document } from './document';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // used for sockets 
  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');

  registerUser(newUser){
    return this._http.post('/new/user', newUser);
  }
  // added socket
  constructor(private _http: HttpClient, private socket: Socket ) { }
  // all used for sockets 
  getDocument(id:string){
    this.socket.emit('getDoc',id);
  }
  newDocument(){
    this.socket.emit('addDoc', {id: this.docId(),doc:''});
  }
  editDocument(document: Document) {
    this.socket.emit('editDoc', document);
  }
  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}

