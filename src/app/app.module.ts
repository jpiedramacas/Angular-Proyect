import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa los módulos de formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { LocalStorageDataComponent } from './local-storage-data/local-storage-data.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    LocalStorageDataComponent,
    DeleteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Agrega el módulo FormsModule
    ReactiveFormsModule // Agrega el módulo ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
