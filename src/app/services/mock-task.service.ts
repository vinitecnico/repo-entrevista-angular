import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task.service'; 

@Injectable({
  providedIn: 'root',
})
export class MockTaskService {
  private mockTasks: Task[] = [
    { id: 1, title: 'Estudar Angular', completed: false },
    { id: 2, title: 'Comprar mantimentos', completed: false },
    { id: 3, title: 'Praticar exercícios', completed: false },
  ];

  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(this.mockTasks);
  }
}
