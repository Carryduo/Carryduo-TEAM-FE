import { Box, CircularProgress } from "@mui/material";
import Seo from "../../common/Seo";

interface Props {
  text: string;
}

const LoadingContainer = ({ text }: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
      <Seo title="Loading" />
      <CircularProgress />
      <span className="text-2xl">{text}</span>
    </div>
  );
};

export default LoadingContainer;
