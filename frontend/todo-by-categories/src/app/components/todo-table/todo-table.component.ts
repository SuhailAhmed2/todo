import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent {
  displayedColumns=['completed','title','delete'];
  @Input() todos: any[];
  @Output() updateCompletion: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();

  toggleCompletion(todoId: number, completed: boolean,todo) {
    todo.completed=!todo.completed;
    this.updateCompletion.emit({ id: todoId, completed });
  }

  onDelete(todoId: number) {
    this.delete.emit(todoId);
  }
}
