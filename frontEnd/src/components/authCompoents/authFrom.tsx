import { useState } from "react";
import SwitchBar from "./switchBar";
import BarComponent from "../barComponent";
import SignInFrom from "./signInForm"
import SignUpFrom from "./signUpForm"

export default function AuthForm() {
  const [isSignUp, setSignUp] = useState(false);
  return <div className="w-[85%] md:w-[71%] lg:w-[40.5%] mx-auto md:border border-grey mt-14 md:mt-42.5 lg:mt-49 lg:mb-51 md:mb-42.25 mb-14">
    <SwitchBar setSignUp={setSignUp} isSignUp={isSignUp}/>
    <BarComponent position="top"/>
    {isSignUp? <SignUpFrom />: <SignInFrom />}
  </div>;
}
