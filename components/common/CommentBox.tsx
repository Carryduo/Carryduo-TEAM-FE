import React from "react";
import { useDeleteComments, usePatchComments } from "../../core/api/comments";

interface CommentProps {
  commentId: string;
  content: string;
  target: number;
}

const CommentBox = ({ commentId, content, target }: CommentProps) => {
  const { mutate: Delete } = useDeleteComments(commentId, target);
  const { mutate: Patch } = usePatchComments(commentId);
  const DeleteComment = () => {
    Delete();
  };
  const PatchComment = () => {
    Patch();
  };
  return (
    <div className="flex space-x-4">
      <span>{content}</span>
      <span className="text-green-300" onClick={DeleteComment}>
        삭제
      </span>
      <span className="text-red-400" onClick={PatchComment}>
        신고
      </span>
    </div>
  );
};

export default React.memo(CommentBox);
