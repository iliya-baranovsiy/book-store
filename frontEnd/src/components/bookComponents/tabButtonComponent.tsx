import type React from "react";
import type { TTab } from "../../types/tab.types.type";


export default function TabButton({
  tab,
  name,
  setTab
}: {
  tab: TTab;
  name: TTab;
  setTab: React.Dispatch<React.SetStateAction<TTab>>
}) {
  return (
    <a
      className={`${tab === name ? "text-black border-b-2 border-black" : "text-greytext"} 
      h-12 w-32 md:w-40 flex 
      justify-center text-[16px] shrink-0
      cursor-pointer`}
      onClick={() => setTab(name)}
    >
      {name}
    </a>
  );
}
