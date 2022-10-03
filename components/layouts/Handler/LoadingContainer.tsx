import Seo from "../../common/Seo";

interface Props {
  text: string;
}

const LoadingContainer = ({ text }: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Seo title="Loading" />
      <span className="text-2xl">{text}</span>
    </div>
  );
};

export default LoadingContainer;
