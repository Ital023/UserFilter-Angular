import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

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

    filteredList = filterUsersListByStatus(filterOptions.status,filteredList);

    filteredList = filterUsersListByDate(filterOptions.startDate,filterOptions.endDate,filteredList);

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

function filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
  
  const STATUS_NOT_TYPPED = status === undefined;

  if(STATUS_NOT_TYPPED){
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.ativo === status);

  return filteredList;

}

function filterUsersListByDate(startDate: Date | undefined,endDate: Date | undefined, usersList: IUser[]): IUser[]{
  const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if(DATE_NOT_SELECTED){
    return usersList;
  }

  const listFiltered = usersList.filter((user)=> isWithinInterval(new Date(user.dataCadastro), {
    start: startDate,
    end: endDate
  }));

  return listFiltered;

}

