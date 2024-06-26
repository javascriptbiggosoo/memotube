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

export interface IMylistItem {
  _id?: string;
  id: string;
  thumbnail: string;
  title: string;
  createdAt: number;
  content: IVideoMemos;
}

export interface IPost extends IMylistItem {
  author: string;
  likes: ILikes;
  category?: string;
}
export interface ILikes {
  _id?: string;
  likeCount: number;
  likedUser: string[];
}
