import { memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useDeleteComments,
  usePatchComments,
  useUpdateComments,
} from "../../../core/api/comments/queries";
import { ICommentProps } from "../../../core/api/comments/types";
import { useTimeZone } from "../../../util/hooks/useTimeZone";
import Input from "../../common/Input";

interface CommentProps {
  commentId: string;
  content: string;
  target: number | string;
  createdAt: string;
  userId: string;
  userNickName: string;
  tokenId: string;
}

const CommentBox = ({
  commentId,
  content,
  target,
  createdAt,
  userId,
  userNickName,
  tokenId,
}: CommentProps) => {
  const { mutate: Delete } = useDeleteComments(commentId, target);
  const { mutate: Patch } = usePatchComments(commentId);
  const { mutateAsync: Update } = useUpdateComments(commentId, target);
  const { register, handleSubmit } = useForm<ICommentProps>();
  const [open, setOpen] = useState<boolean>(false);
  const OpenInputComment = () => {
    setOpen((prev) => !prev);
  };
  const UpdateComment: SubmitHandler<ICommentProps> = (data) => {
    Update({
      content: data.content,
    }).then(() => {
      setOpen(false);
    });
  };
  const DeleteComment = () => {
    Delete();
  };
  const PatchComment = () => {
    Patch();
  };
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-[calc(100%-80px)] flex-col ">
        {open ? (
          <form onSubmit={handleSubmit(UpdateComment)}>
            <Input
              register={register("content")}
              width="w-[calc(100%-1em)]"
              type="text"
              value={content}
              autoFocus={true}
            />
          </form>
        ) : (
          <span className="mb-2">{content}</span>
        )}
        <span className="text-gray-300 text-sm">{userNickName}</span>
        <span className="text-gray-300 text-sm">{useTimeZone(createdAt)}</span>
      </div>
      <div className="flex w-[80px] justify-end space-x-2">
        {userId !== tokenId ? (
          <>
            <span className="text-blue-300" onClick={OpenInputComment}>
              수정
            </span>
            <span className="text-green-300" onClick={DeleteComment}>
              삭제
            </span>
          </>
        ) : (
          <span className="text-red-400" onClick={PatchComment}>
            신고
          </span>
        )}
      </div>
    </div>
  );
};

export default memo(CommentBox);
