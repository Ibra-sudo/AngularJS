import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { NavComponent } from './components/nav/nav.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TodoComponent,
    AddtodoComponent,
    routingComponents,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
