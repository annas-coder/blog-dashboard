export interface IBlogPost {
  id: string;
  title: string;
  author: string;
  body: string;
  excerpt?: string;
  date? :  string ;
}

export interface INotify {
  message : string
}