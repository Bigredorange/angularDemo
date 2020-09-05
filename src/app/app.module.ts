import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SelectComponent } from './select/select.component';
import { TreeSelectComponent } from './treeSelect/treeSelect.component';

@NgModule({
   declarations: [
      AppComponent,
      ProfileEditorComponent,
      ProductListComponent,
      SelectComponent,
      TreeSelectComponent

   ],
   imports: [
      FormsModule,
      BrowserModule,
      ReactiveFormsModule,
      NzSelectModule,
      NzCheckboxModule,
      NzTreeSelectModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
