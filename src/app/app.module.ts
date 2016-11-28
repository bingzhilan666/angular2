import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HeroesModule} from './modules/heroes/heroes.module';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TodoComponent} from "./todo/todo.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {MakeDraggable} from "./shared/make-draggable.directive";
import {MakeDroppable} from "./shared/make-droppable.directive";
// import {LoginComponent} from "./login/login.component";
// import { NavigationComponent } from './navigation/navigation.component';
// import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // NavigationComponent,
    TodoComponent,
    TodoListComponent,
    MakeDraggable, MakeDroppable
  ],
  imports: [
    BrowserModule,
    FormsModule
    // HttpModule,
    // HeroesModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
