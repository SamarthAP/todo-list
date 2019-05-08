import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { ListItem } from './ListItem';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:1234/todolist'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addListItem(item: ListItem) {
    return this.http.post<ListItem>(this.url + '/create', item, this.httpOptions);
  }

  getListItems() {
    return this.http.get<ListItem[]>(this.url + '/all');
  }

  deleteListItem(item) {
    return this.http.delete(this.url + '/' + item._id + '/delete', this.httpOptions);
  }

  updateListItem(item) {
    return this.http.put(this.url + '/' + item._id + '/update', item, this.httpOptions)
  }
}
