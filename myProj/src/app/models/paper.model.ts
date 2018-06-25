export class Paper {
  public title: string;
  public author: string;
  public journal: string='unpublished notes';

  constructor(title: string, author: string, journal: string){
    this.title = title;
    this.author = author;
    this.journal = journal;
    
  }
}
