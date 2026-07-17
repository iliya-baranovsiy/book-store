import InputField from "./inputField"
import FormButton from "./buttonComponent"

export default function SignUpFrom(){
    return (
        <div className="w-full mt-8 md:px-[5.9%]">
              <form>
                <div className="flex flex-col gap-4 mb-8 md:mb-10">
                    <span className="text-black text-[16px] font-inter leading-8 font-bold">
                    Name
                  </span>
                  <InputField fieldName="Your name" type="text" />
                  <span className="text-black text-[16px] font-inter leading-8 font-bold">
                    Email
                  </span>
                  <InputField fieldName="Your Email" type="email" />
                  <span className="text-black text-[16px] font-inter leading-8 font-bold">
                    Password
                  </span>
                  <InputField fieldName="Your Password" type="password" />
                  <span className="text-black text-[16px] font-inter leading-8 font-bold">
                    Confirm password
                  </span>
                  <InputField fieldName="Confirm your password" type="password" />
                </div>
                <FormButton text="SIGN UP" />
              </form>
            </div>
    )
}