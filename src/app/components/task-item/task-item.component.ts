import { Component, Input } from '@angular/core';
import { Task, TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  onToggle() {
    this.taskService.toggleTaskCompletion(this.task.id);
  }

  onRemove() {
    this.taskService.removeTask(this.task.id);
  }
}
