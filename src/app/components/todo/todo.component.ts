import { Component, Input, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/Modules/Todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo: Todo; 
  @Output() toggleEvent = new EventEmitter()
  @Output() deleteEvent = new EventEmitter()

  constructor() { }

  toggle(todo: Todo){
    console.log(todo);
    this.toggleEvent.emit(todo)
    
  }

  delete(todo: Todo){
    console.log(todo);
    this.deleteEvent.emit(todo)
  }

  addTodo(todo: Todo){
    console.log(todo); 
  }

}
