import { Component, Input } from '@angular/core';
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
  faTrash = faTrash;

  consoleLog(): void {
    console.log('This is a console log');
  }
}
