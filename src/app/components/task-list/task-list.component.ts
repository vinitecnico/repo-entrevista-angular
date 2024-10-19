import {
  // AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Task, TaskService } from '../../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  titulo: string = 'Título lista';
  taskSubscription!: Subscription;

  constructor(private taskService: TaskService) {}

  removedTaskCompleted() {
    this.taskService.removedTaskCompleted();
  }

  disableBtnRemovedTaskCompleted() {
    return !this.tasks.filter((task) => task.completed).length;
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.taskSubscription = this.taskService.tasks$.subscribe(
      (tasks) => (this.tasks = tasks)
    );
  }

  ngOnDestroy(): void {
    this.taskSubscription?.unsubscribe();
  }
}
