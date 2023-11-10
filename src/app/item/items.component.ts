import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';
import { Page } from '@nativescript/core';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;

  constructor(private itemService: ItemService, private page: Page) {
    this.page.actionBarHidden = false;
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
}
