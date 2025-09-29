import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task/task.component';
import { CreationComponent } from './task/creation/creation.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, CreationComponent],
  exports: [TasksComponent],
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}
