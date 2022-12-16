import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input()
  task: Task;
  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output()
  onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTrash = faTrash;

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }
}
