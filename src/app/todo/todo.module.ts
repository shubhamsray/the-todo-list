import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsReactiveComponent } from './todo-details-reactive/todo-details-reactive.component';
import { TodoComponent } from './todo.component';
import { todoRoutingModule } from './todo.routes';



@NgModule({
    declarations: [
    TodoDetailsComponent,
    TodoCardComponent,
    TodoListComponent,
    TodoDetailsReactiveComponent,
    TodoComponent
    ],
    imports: [
      CommonModule,
      todoRoutingModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule,
      MatInputModule,
      MatSidenavModule,
      FormsModule,
      ReactiveFormsModule,
    ],
  })
  export class todoModule {}