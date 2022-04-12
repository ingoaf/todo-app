import { Component, Inject, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss'],
})
export class EditTodoDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {

    const updatedTodo = {
      ...this.todo,
      ...form.value
    }

    this.dialogRef.close(updatedTodo);
  }

  close() {
    this.dialogRef.close();
  }

}