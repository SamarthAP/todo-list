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
  currItem: ListItem;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getListItems();
  }

  add(message: String) {
    message = message.trim();

    if (!message) return;
    this.itemService.addListItem({message} as ListItem).subscribe(message => {
      this.listItems.push(message);
    })
  }

  getListItems(): void {
    this.itemService.getListItems().subscribe(items => this.listItems = items);
  }

  delete(item: ListItem): void {
    //console.log(item);
    
    this.listItems = this.listItems.filter(i => i !== item);
    this.itemService.deleteListItem(item).subscribe();
  }

  update(item: ListItem, change): void {
    //this.listItems.
    //console.log(item)
    //this.itemService.updateListItem(item).subscribe();
    if (change.value.length) {
      this.listItems.find((e) => e == item).message = change.value;
      item.message = change.value
      change.value = "";
      this.itemService.updateListItem(item).subscribe();
    }

  }

  test(item) {
    alert(item.value)
  }

}
