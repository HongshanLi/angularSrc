// A service to count how many times a user has been moved
// from inactiveUsers to activeUsers

export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  incrementActiveToInactive(){
    this.activeToInactive++;
    console.log(this.activeToInactive);
  }

  incrementInactiveToActive(){
    this.inactiveToActive++;
    console.log(this.inactiveToActive);
  }
}
