import type React from "react";

export default function SwitchBar({isSignUp, setSignUp}:{isSignUp: boolean, setSignUp: React.Dispatch<React.SetStateAction<boolean>>}){
    return (
        <div className="flex flex-row md:px-[5.9%] h-11 md:h-18">
            <a className={`w-1/2 flex items-center justify-center ${isSignUp? "text-greytext":"border-b-2 border-black text-black"} font-head text-[24px]`} onClick={() => {setSignUp(false)}}>SIGN IN</a>
            <a className={`w-1/2 flex items-center justify-center ${isSignUp? "border-b-2 border-black text-black":"text-greytext"} font-head text-[24px]`} onClick={() => {setSignUp(true)}}>SIGN UP</a>
        </div>
    )
}