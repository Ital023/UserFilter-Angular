import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  onUserSelected(user: IUser){
      this.userSelected = user;
      this.showUserDetails = true;
  }

  //Simulando uma chamada HTTP (Async)
  usersList: IUser[] = [];

  ngOnInit(){
    setTimeout(()=>{
      this.usersList = UsersList;
    },1000);
  }


}
