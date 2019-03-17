import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { ListItem } from './ListItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  private uri = 'api/list' // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addListItem(item: ListItem): Observable<ListItem> {
    //return this.http.post<ListItem>(this.uri, item, this.httpOptions)
    return;
  }

  getListItems() {
    return this.http.get(this.uri);
  }
}