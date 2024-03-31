import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

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

  onFilter(filterOptions: IFilterOptions){
      this.userListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name,usersList);

    

    return filteredList;
  }




  //Simulando uma chamada HTTP (Async)
  usersList: IUser[] = [];
  userListFiltered: IUser[] = [];

  ngOnInit(){
    setTimeout(()=>{
      this.usersList = UsersList;
      this.userListFiltered = this.usersList;
    },1000);
  }



}


function filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if(NAME_NOT_TYPPED){
      return UsersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
}

