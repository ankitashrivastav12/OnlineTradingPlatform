import React from "react";

import Signup from "./Signup";
import Faq from "./Faq";
import Investments from "./Investments";
import OpenAccount from "../OpenAccount";


function SignupPage() {
  return (
    <>
      <Signup />
      <Investments/>
      <Faq/>
      <OpenAccount/>
    </>
  );
}

export default SignupPage;