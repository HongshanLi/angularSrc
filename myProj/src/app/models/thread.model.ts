export class Thread {
  threadId: string;
  commentor: string;
  content: string;
  litId: string;
  pageNumber: number;

  constructor(threadId: string,
    commentor: string,
    content: string,
    litId:string,
    pageNumber: number){
    this.threadId = threadId;
    this.commentor = commentor;
    this.content = content;
    this.litId = litId;
    this.pageNumber = pageNumber;
  }
}
