import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({required: true}) usersList: IUser[] = [];
  
  displayedColumns: string[] = ["name","date","status"];

  @Output("userSelected") userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser){    
    this.userSelectedEmitt.emit(user);
  }
  
}
