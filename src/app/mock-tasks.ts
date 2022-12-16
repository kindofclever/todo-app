import { Task } from './interfaces/Task';

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctor Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  { id: 3, text: 'Food Shopping', day: 'Feb 5th at 2:30pm', reminder: false },
  {
    id: 4,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  { id: 5, text: 'Food Shopping', day: 'Feb 5th at 2:30pm', reminder: false },
];
