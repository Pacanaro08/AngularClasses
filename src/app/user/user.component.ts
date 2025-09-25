import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserStructure } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: UserStructure;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // select = output<string>();

  /*SIGNAL START*/
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  //   // return 'assets/users/' + this.avatar(); signal
  // })
  /*SIGNAL END*/

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
