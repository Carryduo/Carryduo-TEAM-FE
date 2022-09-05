import { SubmitHandler, useForm } from "react-hook-form";
import Grid from "../components/common/Grid";
import PageContainer from "../components/common/PageContainer";

interface FormProps {
  nickName: string;
}

const Signup = () => {
  const { register, handleSubmit } = useForm<FormProps>();
  const onValid: SubmitHandler<FormProps> = ({ nickName }) => {};
  return (
    <PageContainer>
      <Grid width="w-full" height="h-full">
        <span>회원가입</span>
      </Grid>
    </PageContainer>
  );
};

export default Signup;
