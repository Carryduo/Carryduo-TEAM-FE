export interface ICommentProps {
  content: string;
}

export interface Comment {
  champId: string;
  id: string;
  category: string;
  content: string;
  reportNum: string;
  createdAt: string;
  userId: {
    enableChat: boolean;
    userId: string;
    nickname: string;
    profileImg: string;
  };
}

export interface IComments {
  data: Comment[];
}
