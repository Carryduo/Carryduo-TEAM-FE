import Seo from "../common/Seo";

const LoadingPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Seo title="Loading" />
      <span className="text-2xl">Loading...</span>
    </div>
  );
};

export default LoadingPage;
