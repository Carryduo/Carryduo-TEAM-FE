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
  champId: number;
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
          width="w-[20rem]"
          placeHolder="평판 입력"
          autoFocus={false}
          type="text"
          register={register("content", { required: true })}
        />
      </form>
      <span>평판</span>
      <div className="flex flex-col">
        {Comments?.data.map((data) => {
          return (
            <div key={data.commentId}>
              <CommentBox
                commentId={data.commentId}
                content={data.content}
                target={champId}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentsFormContainer;
