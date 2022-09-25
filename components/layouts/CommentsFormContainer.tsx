import { SubmitHandler, useForm } from "react-hook-form";
import {
  ICommentProps,
  useGetComments,
  usePostComments,
} from "../../core/api/comments";
import CommentBox from "../common/CommentBox";

import Input from "../common/Input";

interface CommentsProps {
  category: string;
  champId: number | string;
}

const CommentsFormContainer = ({ category, champId }: CommentsProps) => {
  const { data: Comments } = useGetComments(category, champId);
  const { handleSubmit, register, setValue } = useForm<ICommentProps>();
  const { mutate } = usePostComments(category, champId);
  const onValid: SubmitHandler<ICommentProps> = (data) => {
    mutate(data);
    setValue("content", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
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
      <div className="flex flex-col space-y-4 mt-4">
        {Comments?.data.length === 0 ? <span>등록된 평판이 없습니다.</span> : Comments?.data.map((data) => {
          return (
            <div key={data.id} className="px-4 bg-gray-700 rounded-md min-h-[50px]">
              <CommentBox
                commentId={data.id}
                content={data.content}
                target={champId}
                createdAt={data.createdAt}
                userId={data.userId.id}
                userNickName={data.userId.nickname}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentsFormContainer;
