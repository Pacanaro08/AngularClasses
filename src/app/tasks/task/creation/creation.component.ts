import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.css',
})
export class CreationComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private tasksService = inject(TasksService);

  // enteredTitle = signal(''); signal don't need to change the ngModel
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.userId
    );
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
