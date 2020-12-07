import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: {}
  @Output() toggleEvent = new EventEmitter()
  @Output() deleteEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggle(todo){
    console.log({todo});
    this.toggleEvent.emit(todo)
    
  }

  delete(todo){
    console.log({todo});
    this.deleteEvent.emit(todo)
    
  }

  addTodo(todo){
    console.log({todo});
    
  }

}
