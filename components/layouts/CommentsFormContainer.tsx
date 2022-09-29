import { SubmitHandler, useForm } from "react-hook-form";
import {
  ICommentProps,
  useGetComments,
  usePostComments,
} from "../../core/api/comments";
import { useGetUserId } from "../../core/api/myProfile";
import CommentBox from "../common/CommentBox";

import Input from "../common/Input";

interface CommentsProps {
  category: string;
  champId: number | string;
}

const CommentsFormContainer = ({ category, champId }: CommentsProps) => {
  const { data: Comments } = useGetComments(category, champId);
  const { data: id } = useGetUserId();
  const { handleSubmit, register, setValue } = useForm<ICommentProps>();
  const { mutate } = usePostComments(category, champId);
  const onValid: SubmitHandler<ICommentProps> = (data) => {
    mutate(data);
    setValue("content", "");
  };
  return (
    <div className="relative h-full overflow-hidden">
      <form
        onSubmit={handleSubmit(onValid)}
        className="sticky top-0 z-50 w-full bg-box"
      >
        <Input
          rounded="rounded-2xl"
          width="w-full"
          placeHolder="평판 입력"
          autoFocus={false}
          type="text"
          register={register("content", { required: true })}
          openSubmit={true}
        />
      </form>
      <div className="mt-4 flex h-[calc(100%-3rem)] flex-col space-y-4 overflow-y-scroll">
        {Comments?.length === 0 ? (
          <span>등록된 평판이 없습니다.</span>
        ) : (
          Comments?.map((data) => {
            return (
              <div
                key={data.id}
                className=" rounded-md bg-gray-700 px-4"
              >
                <CommentBox
                  commentId={data.id}
                  content={data.content}
                  target={champId}
                  createdAt={data.createdAt}
                  userId={data.userId.id}
                  tokenId={String(id?.userId)}
                  userNickName={data.userId.nickname}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CommentsFormContainer;
