import { useRouter } from "next/router";
import React from "react";

const NotPage = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace("/");
  }, []);
  return null;
};

export default NotPage;
