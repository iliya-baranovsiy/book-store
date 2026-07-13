import BarComponent from "./barComponent";

export default function FooterComponent() {
  return (
    <div className="mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%] h-38.25 md:h-23.75">
      <BarComponent position="top" />
      <div className="flex flex-col gap-6 items-center mt-10 md:flex-row md:mt-9 md:justify-between">
        <span className="text-[16px] leading-6 text-greytext">©2022 Bookstore</span>
        <span className="text-[16px] leading-6 text-greytext">All rights reserved</span>
      </div>
    </div>
  );
}
