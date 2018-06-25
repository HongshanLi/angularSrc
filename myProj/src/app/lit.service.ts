import { Paper } from './models/paper.model';
// import { LectureNote } from ./models/lectureNote.model;

export class PaperService {
  papers: Paper[] = [
    new Paper(
      'Hodge Theory 1',
      'Pierre Deligne',
      'IHES'
    ),
    new Paper(
      'Representation of Fundamental Groups',
      'Carlos Simpson',
      'IHES'
    )
  ];

  constructor(){}

  getPapers(){
    return this.papers;
  }

}
