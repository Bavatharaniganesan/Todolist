import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';

  todoList :any = [];

  AddList(input :string) {
    this.todoList.push(input);
  }

  remove(index : number) {
    this.todoList = this.todoList.filter((element :string)=> {
      return element !== this.todoList[index];
    });
    console.log(this.todoList);
  }
}
