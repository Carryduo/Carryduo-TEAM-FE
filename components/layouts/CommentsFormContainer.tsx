import { useGetChampComments } from "../../core/api/comments";

interface CommentsProps {
  category: string;
  id: number;
}

const CommentsFormContainer = ({ category, id }: CommentsProps) => {
  const { data: Comments } = useGetChampComments(category, id);
  return (
    <>
      <span>평판</span>
      {Comments?.data.map((data) => {
        return <span key={data.commentId}>{data.content}</span>;
      })}
    </>
  );
};

export default CommentsFormContainer;
