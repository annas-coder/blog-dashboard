export interface IBlogPost {
  id: string;
  title: string;
  author: string;
  body: string;
  excerpt?: string;
  date? : Date | undefined | string ;
}

export interface INotify {
  message : string
}