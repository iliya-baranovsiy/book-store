export default function ContainerTtitle({
  text
}: {
  text?: string;
}) {
  const title = text?`Results of search ${text}`: "New Releases Books"
  return (
    <div className="mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%] h-11 mt-14 mb-9 md:mb-12 md:mt-18 md:h-16">
      <h2 className="font-head font-normal text-[32px] leading-16 tracking-normal whitespace-nowrap md:text-[56px]">{title}</h2>
    </div>
  );
}
