import { Component, OnInit, Input } from '@angular/core';
import { Paper } from '../../models/paper.model';
import { Thread } from '../../models/thread.model';

@Component({
  selector: 'app-threads-on-paper',
  templateUrl: './threads-on-paper.component.html',
  styleUrls: ['./threads-on-paper.component.css']
})
export class ThreadsOnPaperComponent implements OnInit {
  @Input() thread = Thread;

  constructor() { }

  ngOnInit() {
  }


}
