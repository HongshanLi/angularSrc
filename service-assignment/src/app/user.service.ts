import { EventEmitter } from '@angular/core';

export class UserService {
  // Define a user property to store all user info
  users = ['Anna', 'Chris', 'Max', 'Manu'];

  // instantiate an event emitter that emits the id of the user
  // when his status changes from active to inactive
  activeToInactive = new EventEmitter<number>();

  // instantiate an event emitter that emits the id of the user
  // when his status changes from inactive to active
  inactiveToActive = new EventEmitter<number>();

}
