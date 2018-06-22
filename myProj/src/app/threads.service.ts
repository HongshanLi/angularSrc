// This service manages threads
import { Thread } from './models/thread.model';
import { EventEmitter } from "@angular/core";

export class ThreadsService {

  newThreadsLoaded = new EventEmitter<Thread[]>();
  newThreads: Thread[] = [
    new Thread(
      "00", // threadId
      "Hongshan", // commentor
      "Test content", // content
      "001", // litId,
      10 // page number
    )
  ];

  constructor(){}

  getNewThreads(){
    return this.newThreads;
  }
}
