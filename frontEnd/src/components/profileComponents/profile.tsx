import Head from "./head";
import MainData from "./mainData";
import PasswordSection from "./passwordSection";


export default function ProfileComponent({name, email}:{name:string, email: string}) {
  return (
    <div className="mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%] mt-14 md:mt-18">
      <Head />
      <MainData name={name} email={email}/>
      <h4 className="font-head text-black text-[24px] mb-4">PASSWORD</h4>
      <PasswordSection />
    </div>
  );
}
