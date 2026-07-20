import { useRef } from "react";
import InputField from "../authCompoents/inputField";
import BarComponent from "../barComponent";
import FormButton from "../authCompoents/buttonComponent";
import { Link } from "react-router-dom";

export default function PasswordSection() {
  const passwordRef = useRef<HTMLInputElement>(null)
  const newPasswordRef = useRef<HTMLInputElement>(null)
  const confirmNewPasswordref = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)


  return (
    <form className="mb-14 md:mb-18" ref={formRef}>
      <div className="mb-14 md:mb-18">
        <div className="flex flex-col lg:w-[49.2%] gap-4.5 mb-4">
          <span className="text-[16px] text-black font-inter font-bold">
            Password
          </span>
          <InputField type={"password"} fieldName="Password" ref={passwordRef}/>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex flex-col gap-4.5 flex-1">
            <span className="text-[16px] text-black font-inter font-bold">
              New password
            </span>
            <InputField type={"password"} fieldName="New password" ref={newPasswordRef}/>
          </div>
          <div className="flex flex-col gap-4.5 flex-1">
            <span className="text-[16px] text-black font-inter font-bold">
              Confirm new password
            </span>
            <InputField type={"password"} fieldName="Confirm new password" ref={confirmNewPasswordref}/>
          </div>
        </div>
      </div>
      <div className="w-full">
        <BarComponent position="top" />
        <div className="flex flex-col md:flex-row mt-9.25 md:mt-12 gap-6 md:gap-8">
          <FormButton text="SAVE CHANGES"/>
          <Link to={"/"} className="w-full">
            <button
              className="w-full h-14 bg-white text-black font-head text-[18px] cursor-pointer leading-6 tracking-wider text-center md:mb-10 border border-grey"
              type="button"
            >
              {"CANCEL"}
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
