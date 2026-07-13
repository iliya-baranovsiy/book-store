export default function SubscribeFormComponent({}: {}) {
  return (
    <div className="bg-purple h-90 my-14 md:my-18 md:h-71 lg:h-72 mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%] relative">
      <div className="absolute w-[82.3%] md:h-[40.8%] md:w-[84.8%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  md:translate-x-0 md:translate-y-0 md:left-[5.8%] md:top-[14%] lg:left-[5.7%] lg:top-[22%] flex flex-col gap-6 md:gap-8">
        <div className="w-full md:w-[82.9%] lg:w-full">
          <h1 className="font-head font-normal md:text-[40px] md:leading-16 tracking-normal text-[28px] leading-none">
            Subscribe to Newsletter
          </h1>
          <span className="font-inter text-greytext text-[16px] leading-6 md:leading-7 md:text-[18px]">
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </span>
        </div>
        <div>
          <form className="flex gap-6 flex-col md:flex-row md:gap-0">
            <input type="email" placeholder="Your email" className="w-full outline-0 appearance-none bg-white h-14 lg:w-[85%] pl-6 md:w-[72.5%]"></input>
            <button type="submit" className="w-full lg:w-[15%] md:w-[17.5%] h-14 bg-black text-white font-head text-[18px] leading-6 tracking-wider text-center">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  );
}
/** left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2*/