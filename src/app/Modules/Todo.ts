// This is first way to write class with constructor
// export default class Todo {  
//     id: String;
//     text: String;
//     completed: boolean

//     constructor(id: String, text: String, completed: boolean) {
//         this.id = id;
//         this.text = text;
//         this.completed = completed
//     }
// }


// This is 2nd way to write class with constructor shorted
export default class Todo {
    constructor(public title: String, public completed: boolean, public id: number= 0) {}
}