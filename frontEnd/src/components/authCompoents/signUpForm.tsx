import { useState, useRef } from "react";
import InputField from "./inputField";
import FormButton from "./buttonComponent";
import { register } from "../../services/authUserService";

export default function SignUpFrom() {
  const [status, setStatus] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmRef.current?.value || "";

    if (password !== confirmPassword) {
      setStatus("Passwords are not identical");
      return;
    }

    try {
      const responseStatus = await register(
        nameRef.current?.value || "",
        emailRef.current?.value || "",
        password
      );
      if (responseStatus === 201) {
        setStatus("Success")
        formRef?.current?.reset()
      }
      else {
        setStatus("Error")
      }

    } catch (error) {
      setStatus("Registration error");
    }
  }

  return (
    <div className="w-full mt-8 md:px-[5.9%]">
      <form onSubmit={handleRegister} ref={formRef}>
        <div className="flex flex-col gap-4 mb-8 md:mb-10">

          <span className="text-black text-[16px] font-inter leading-8 font-bold">
            Name
          </span>
          <InputField
            fieldName="Your name"
            type="text"
            ref={nameRef}
          />

          <span className="text-black text-[16px] font-inter leading-8 font-bold">
            Email
          </span>
          <InputField
            fieldName="Your Email"
            type="email"
            ref={emailRef}
          />

          <span className="text-black text-[16px] font-inter leading-8 font-bold">
            Password
          </span>
          <InputField
            fieldName="Your Password"
            type="password"
            ref={passwordRef}
          />

          <span className="text-black text-[16px] font-inter leading-8 font-bold">
            Confirm password
          </span>
          <InputField
            fieldName="Confirm your password"
            type="password"
            ref={confirmRef}
          />

        </div>

        <FormButton text="SIGN UP" />
      </form>

      <p>{status}</p>
    </div>
  );
}