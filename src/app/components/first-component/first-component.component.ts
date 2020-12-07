import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  firstComponent = [
    {
      id: 1, text: 'first task', completed: true
    },
    {
      id: 2, text: '2nd task', completed: false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleTodo(todo){
    this.firstComponent = this.firstComponent.map(item => {
      if(todo.id === item.id) {
        item.completed = ! item.completed
      }
      return item
    })
    
  }

  deleteTodo(todo){
    this.firstComponent = this.firstComponent.filter(item => {
      return item.id !== todo.id
    })
    
  }

  addTodo(todo) {
    this.firstComponent.push(todo)
  }

}
