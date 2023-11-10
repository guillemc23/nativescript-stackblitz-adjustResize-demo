import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, registerElement } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';

import { Tabs } from '@nativescript-community/ui-material-tabs';
registerElement('MDTabs', () => Tabs);

import { PersistentBottomSheet } from '@nativescript-community/ui-persistent-bottomsheet';
// registerElement('BottomSheet', () => PersistentBottomSheet);

import { NativeScriptMaterialTabsModule } from '@nativescript-community/ui-material-tabs/angular';
import { BottomSheetModule } from '@nativescript-community/ui-persistent-bottomsheet/angular';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptMaterialTabsModule,
    BottomSheetModule,
  ],
  exports: [BottomSheetModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
