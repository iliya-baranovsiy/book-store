export default function TextComponent({atr, data}:{atr:string, data:string}) {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <span className="mb-2 text-greytext text-[16px] leading-8">{atr}</span>
      <span className="text-black text-[16px] leading-8">{data}</span>
    </div>
  );
}
