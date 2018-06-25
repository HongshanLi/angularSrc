import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lit-open',
  templateUrl: './lit-open.component.html',
  styleUrls: ['./lit-open.component.css']
})
export class LitOpenComponent implements OnInit {
  pdfSrc: string = '/assets/001.pdf';
  page = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("Hello", this.route);
  }

  toPreviousPage(){
    if(this.page > 1){
      this.page = this.page -1;
    }
  }

  toNextPage(){
    //@TODO page cannot exceed maximum
    this.page++;
  }
}
