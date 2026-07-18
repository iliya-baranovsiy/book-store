import React, { useRef, useState } from "react";
import InputField from "./inputField";
import FormButton from "./buttonComponent";
import { login } from "../../services/authUserService";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function SignInFrom() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState("")

  const { checkAuth } = useAuth();
  const navigate = useNavigate()

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    let responseStatus = await login(email, password)
    if (responseStatus === 200){
      setStatus("ok")
      formRef.current?.reset()
      checkAuth()
      navigate("/")
      return
    }
    else{
      setStatus("Error")
    }
  }

  return (
    <div className="w-full mt-8 md:px-[5.9%]">
      <form ref={formRef} onSubmit={handleAuth}>
        <div className="flex flex-col gap-4 mb-8 md:mb-10">
          <span className="text-black text-[16px] font-inter leading-8 font-bold">
            Email
          </span>
          <InputField fieldName="Your Email" type="email" ref={emailRef}/>
          <span className="text-black text-[16px] font-inter leading-8 font-bold">
            Password
          </span>
          <InputField fieldName="Your Password" type="password" ref={passwordRef}/>
          <span>Forgot password ?</span>
        </div>
        <FormButton text="SIGN IN" />
      </form>
      <p>{status}</p>
    </div>
  );
}
