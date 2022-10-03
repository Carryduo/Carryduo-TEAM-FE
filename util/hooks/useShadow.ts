import { useEffect, useState } from "react";
import { RecoilState, useRecoilState } from "recoil";

export function useShadow(atom: RecoilState<any>) {
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [atomName, SetAtomName] = useRecoilState(atom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial === true ? false : atomName, SetAtomName];
}
