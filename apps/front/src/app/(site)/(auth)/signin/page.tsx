import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Comenzar | UH Infociencia",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Comenza" />

      <Signin />
    </>
  );
};

export default SigninPage;
