import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  //@Input() users: string[];
  //@Output() userSetToInactive = new EventEmitter<number>();

  activeUsers = ['Chris', 'Manu'];
  constructor(private userService: UserService
              private counterService: CounterService){
    this.userService.inactiveToActive.subscribe(
      (userName: string) => {
      console.log("subsribing to iactiveToActive", userName);

      this.activeUsers.push(userName);
    }
    )
  }

  onSetToInactive(userName: string) {
    //this.userSetToInactive.emit(id);
    this.userService.activeToInactive.emit(userName);
    let id = this.activeUsers.indexOf(userName);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  //onSetToInactive(id: number) {
  //  this.inactiveUsers.push(this.activeUsers[id]);
  //  this.activeUsers.splice(id, 1);
  //}

}
