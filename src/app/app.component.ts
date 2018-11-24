import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList: Task[] = [
    {id: 1, name: "Task 1", desc: "It is the first task"},
    {id: 2, name: "Task 2", desc: "It is the second task"},
    {id: 3, name: "Task 3", desc: "It is the third task"}
  ];

  selectedTask: Task = new Task();
  
  openForEdit(task: Task){
    this.selectedTask = task;
  }

  addOrEdit(){
    if(this.selectedTask.id == 0){
      this.selectedTask.id = this.taskList.length + 1;
      this.taskList.push(this.selectedTask);
    }

    this.selectedTask = new Task();
  }

  delete(){
    if(confirm("You want to delete it?")){
        this.taskList = this.taskList.filter(x => x != this.selectedTask);
      this.selectedTask = new Task();
    }
  }
}
