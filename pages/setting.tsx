import dynamic from "next/dynamic";
import { dehydrate, useQuery } from "react-query";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
import { instance } from "../core/api/axios";
import { getProfile, ProfileProps } from "../core/api/myProfile";
import { queryClient } from "./_app";
const SignupFormContainer = dynamic(
  () => import("../components/layouts/SignupFormContainer"),
  {
    ssr: false,
  }
);

const Profile = () => {
  const { data: profile } = useQuery<ProfileProps>(
    ["getMyProfile"],
    getProfile
  );
  return (
    <PageContainer space="space-x-4">
      <Seo title="설정" />
      <SignupFormContainer profile={profile} />
    </PageContainer>
  );
};

export default Profile;

export async function getStaticProps() {
  await queryClient.prefetchQuery(["getMyProfile"], getProfile);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
