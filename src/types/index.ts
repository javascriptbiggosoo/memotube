export interface IUser {
  _id?: string;
  email: string;
}
export interface IMemo {
  _id?: string;
  id: string;
  memoTime: string;
  memoText: string;
  createdAt: number;
}

export interface IVideoMemos {
  _id?: string;
  id: string;
  videoId: string;
  memos: IMemo[];
}

export interface IMyMemo {
  _id?: string;
  id: string;
  thumbnail: string;
  title: string;
  createdAt: number;
  content: IVideoMemos;
}

export interface IPost {
  _id?: string;
  id: string;
  thumbnail: string;
  title: string;
  content: IVideoMemos;
  author: string;
  createdAt: number;
  likes: ILikes;
  category?: string;
}
interface ILikes {
  _id?: string;
  likeCount: number;
  likedUser: string[];
}
