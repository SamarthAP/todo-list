import { Component, OnInit } from '@angular/core';
import { ListItem } from '../ListItem';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listItems: ListItem[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    //TODO: make a getListItems() func that sets listItems
    this.getListItems();
  }

  add(message: String) {
    message = message.trim();
    if (!message) { return; }
    this.itemService.addListItem({message} as ListItem).subscribe(message => {
      this.listItems.push(message);
    });
    
  }

  getListItems(): void {
    this.itemService.getListItems().subscribe(items => {
      console.log(items);
    });
  }

}
