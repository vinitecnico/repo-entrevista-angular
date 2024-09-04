import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  taskTitle: string = '';

  constructor(private taskService: TaskService) {}

  onSubmit() {
      console.log('Task added');
      this.taskService.addTask(this.taskTitle.trim());
  }
}
