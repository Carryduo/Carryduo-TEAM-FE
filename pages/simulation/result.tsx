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
      Router.back();
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
  console.log(Result);
  return (
    <PageContainer>
      <Seo title="Result" />
      {Result === undefined ? (
        <LoadingContainer text={String(error?.response.data.message)} />
      ) : (
        <Grid width="w-full" height="h-full">
          <span>결과</span>
          <span>{query.category}</span>
          <Image
            alt=""
            width={48}
            height={48}
            src={pick[0].champImg}
            priority
          />
          <Image
            alt=""
            width={48}
            height={48}
            src={pick[1].champImg}
            priority
          />
          <span>vs</span>
          <Image
            alt=""
            width={48}
            height={48}
            src={pick[2].champImg}
            priority
          />
          <Image
            alt=""
            width={48}
            height={48}
            src={pick[3].champImg}
            priority
          />
          <span>{useResult(Result.winrate)}</span>
        </Grid>
      )}
    </PageContainer>
  );
};

export default Result;
