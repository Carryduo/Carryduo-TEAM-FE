import { useEffect, useState } from "react";

export const useWindow = () => {
  const [isWindows, setIsWindows] = useState<boolean>(true);
  useEffect(() => {
    const window =
      navigator.userAgent.includes("Windows") ||
      navigator.userAgent.includes("Macintosh");
    setIsWindows(Boolean(window));
  }, []);
  return isWindows;
};
