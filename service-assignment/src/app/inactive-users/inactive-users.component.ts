import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  //@Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();

  inactiveUsers = ['Max', 'Anna'];

  constructor(private userService: UserService,
              private counterService: CounterService){
    this.userService.activeToInactive.subscribe(
      (userName: string) => {
      console.log("subsribing to activeToInactive", userName);
      this.inactiveUsers.push(userName);
    }
    )
  }

  onSetToActive(userName: number) {
    this.userService.inactiveToActive.emit(userName);
    let id = this.inactiveUsers.indexOf(userName);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();

  }
}
