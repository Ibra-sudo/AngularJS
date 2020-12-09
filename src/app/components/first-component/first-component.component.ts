import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/Modules/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  firstComponent: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos(5)
    .subscribe(todos => {
      this.firstComponent = todos
    })
  }

  toggleTodo(todo){
    todo.completed = ! todo.completed
    this.update(todo)
  }

  update(todo) {
    this.todoService.update(todo).subscribe(() => {
      this.firstComponent = this.firstComponent.map(item => {
        if(todo.id === item.id) {
          return todo
        }
        return item
      })
    })
  }

  deleteTodo(todo){
    this.todoService.delete(todo.id).subscribe(() => {
      this.firstComponent = this.firstComponent.filter(item => {
        return item.id !== todo.id
      })
    })   
  }

  addTodo(todo) {
    this.todoService.add(todo).subscribe((newTodo) => {
      this.firstComponent.push(newTodo)
    })  
  }

}
