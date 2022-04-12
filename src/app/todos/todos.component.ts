import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.dataService.addTodo(new Todo(form.value.text));
    }
    
    form.reset();
  }

  toggleCompleted(todo: Todo) {
    // complete todo
    todo.completed = !todo.completed;
  }

  toggleEdit(todo: Todo) {

    const index = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '600px',
      data: todo
    });

    dialogRef.afterClosed().subscribe((result)=> {
      if (result) {
        this.dataService.updateTodo(index, result);
      }
    });

    //this.dataService.updateTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.dataService.deleteTodo(this.todos.indexOf(todo));
  }
}
