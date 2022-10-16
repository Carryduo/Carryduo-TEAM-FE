import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import LoadingContainer from "../../components/layouts/Handler/LoadingContainer";
import { useGetSimulationResult } from "../../core/api/simulation/queries";
import { PickChampArray } from "../../core/config/PickChampArray";
import { useResult } from "../../util/hooks/useResult";
import { useSweet } from "../../util/hooks/useSweet";

const Result = () => {
  const pick = useRecoilValue(PickChampArray);
  useEffect(() => {
    if (pick.length < 4) {
      useSweet("1000", "error", "올바른 결과 값이 아닙니다");
      Router.push("/simulation");
    }
  }, []);
  const { query } = useRouter();
  const { data: Result, error } = useGetSimulationResult(
    String(query.category),
    Number(pick[0]?.id),
    Number(pick[1]?.id),
    Number(pick[2]?.id),
    Number(pick[3]?.id)
  );
  return (
    <PageContainer>
      <Seo title="Result" />
      {Result === undefined ? (
        <LoadingContainer text={String(error?.response.data.message)} />
      ) : (
        <Grid width="w-full" height="h-full">
          <div className="flex h-full w-full flex-col items-center justify-center space-y-8">
            <div className="flex space-x-4">
              <Image
                alt=""
                width={96}
                height={96}
                src={pick[0].champImg}
                priority
              />
              <Image
                alt=""
                width={96}
                height={96}
                src={pick[1].champImg}
                priority
              />
            </div>
            <span>vs</span>
            <div className="flex space-x-4">
              <Image
                alt=""
                width={96}
                height={96}
                src={pick[2].champImg}
                priority
              />
              <Image
                alt=""
                width={96}
                height={96}
                src={pick[3].champImg}
                priority
              />
            </div>
            <span>{useResult(Result.winrate)}</span>
            <span
              onClick={Router.back}
              className="cursor-pointer rounded-md bg-blue-500 p-2 px-4"
            >
              다시하기
            </span>
          </div>
        </Grid>
      )}
    </PageContainer>
  );
};

export default Result;
