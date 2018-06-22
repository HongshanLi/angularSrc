import { Component, OnInit } from '@angular/core';
import { Paper } from '../models/paper.model';
import { Thread } from '../models/thread.model';
import { ThreadsService } from '../threads.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit {
  newThreads: Thread[];
  

  newPublications = [];

  constructor(private threadsService: ThreadsService) {
    this.newThreads = this.threadsService.getNewThreads();
  }

  ngOnInit() {
    console.log(this.newThreads);
  }

}
