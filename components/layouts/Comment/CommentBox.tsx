import { memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ICommentProps,
  useDeleteComments,
  usePatchComments,
  useUpdateComments,
} from "../../../core/api/comments";
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
      <div className="flex flex-col w-[calc(100%-50px)]">
        {open ? (
          <form onSubmit={handleSubmit(UpdateComment)}>
            <Input
              register={register("content")}
              type="text"
              value={content}
              autoFocus={true}
            />
          </form>
        ) : (
          <span>{content}</span>
        )}
        <span>{userNickName}</span>
        <span>{useTimeZone(createdAt)}</span>
      </div>
      <div>
        {userId === tokenId ? (
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
