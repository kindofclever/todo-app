import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Manager';
  subtitle: string = 'The best way to manage your tasks';

  // Example onClick method
  consoleLog(): void {
    console.log('This is a console log');
  }
}
