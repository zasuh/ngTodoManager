import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Todo Manager';
  todos = [
    {
      label: 'Get Milk',
      priority: 3,
      done: false
    },
    {
      label: 'Do laundry',
      priority: 1,
      done: true
    },
    {
      label: 'Go to hairdresser',
      priority: 5,
      done: true
    },
    {
      label: 'Pickup Billy from soccer practice',
      priority: 1,
      done: false
    },
    {
      label: 'Program a ToDo app in Angular',
      priority: 1,
      done: true
    }
  ];

  addTodo(newTodoLabel) {
    let newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };

    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }

  editTodo(todo) {
    todo.editing = true;
  }

  cancelEditing(todo) {
		todo.editing = false;
  }

  stopEditing(todo, editedTitle: string) {
		todo.title = editedTitle;
		todo.editing = false;
  }

  updateEditing(todo, editedTitle: string) {
		editedTitle = editedTitle.trim();
		todo.editing = false;

		if (editedTitle.length === 0) {
			return alert("You must enter a task.");
		}

		todo.label = editedTitle;
	}
}