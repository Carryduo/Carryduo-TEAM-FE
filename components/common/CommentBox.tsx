import React from "react";
import { useDeleteComments, usePatchComments } from "../../core/api/comments";
import { useTimeZone } from "../../util/hooks/useTimeZone";

interface CommentProps {
  commentId: string;
  content: string;
  target: number | string;
  createdAt: string;
  userId: string;
  userNickName: string;
}

const CommentBox = ({
  commentId,
  content,
  target,
  createdAt,
  userId,
  userNickName,
}: CommentProps) => {
  const { mutate: Delete } = useDeleteComments(commentId, target);
  const { mutate: Patch } = usePatchComments(commentId);
  const DeleteComment = () => {
    Delete();
  };
  const PatchComment = () => {
    Patch();
  };
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <span>{content}</span>
        <span>{userNickName}</span>
        <span>{useTimeZone(createdAt)}</span>
      </div>
      <div>
        <span className="text-green-300" onClick={DeleteComment}>
          삭제
        </span>
        <span className="text-red-400" onClick={PatchComment}>
          신고
        </span>
      </div>
    </div>
  );
};

export default React.memo(CommentBox);
