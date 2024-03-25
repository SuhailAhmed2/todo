import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoService } from '../../services/todo.service';
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  categories=['children','food','work'];

  constructor(private dialog: MatDialog,private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();    
  }

  getTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      
      
    });
  }

  refresh() {
    this.getTodos();
  }

  updateCompletionStatus(todoId: number, completed: boolean) {
    this.todoService.updateTodoCompletionStatus(todoId, completed).subscribe(() => {
      // Refresh the todo list after updating completion status
      this.getTodos();
    });
  }

  deleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId).subscribe(() => {
      // Refresh the todo list after deleting the todo
      this.getTodos();
    });
  }
  getCategoryTodo(category)
  {
    return this.todos.filter(todo => todo.category === category)
  }

  openAddTodoDialog(category?: string) {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      width: '300px',
      data: { category }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addTodo(result);
      }
    });
  }

  private addTodo(newTodo: any) {
    this.todoService.addTodo(newTodo).subscribe(() => {
      this.getTodos();
    });
  }

  
}
