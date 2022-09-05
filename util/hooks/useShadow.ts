import { RecoilState, useRecoilState } from "recoil";
import React from "react";

export function useShadow(atom: RecoilState<any>) {
  const [isInitial, setIsInitial] = React.useState(true);
  const [atomName, SetAtomName] = useRecoilState(atom);

  React.useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial === true ? false : atomName, SetAtomName];
}
