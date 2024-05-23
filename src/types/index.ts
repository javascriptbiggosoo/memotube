export interface IMemo {
  id: string;
  memoTime: string;
  memoText: string;
  createdAt: number;
}

export interface IVideoMemos {
  id: string;
  videoId: string;
  memos: IMemo[];
}

export interface IPost {
  id: string;
  thumbnail: string;
  title: string;
  content: IVideoMemos;
  author: string;
  createdAt: number;
  likes: ILikes;
  category: string;
}
interface ILikes {
  likeCount: number;
  likedUser: string[];
}
