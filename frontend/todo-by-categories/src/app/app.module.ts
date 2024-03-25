import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoService } from './services/todo.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { MatCheckboxModule, MatExpansionModule, MatIconModule, MatTableModule, MatProgressSpinnerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AddTodoDialogComponent } from './components/add-todo-dialog/add-todo-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoTableComponent,
    AddTodoDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddTodoDialogComponent]
})
export class AppModule { }
