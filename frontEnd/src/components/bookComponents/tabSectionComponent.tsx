import BarComponent from "../barComponent";
import TabButton from "./tabButtonComponent"
import type { TTab } from "../../types/tab.types.type";

export default function TabSection({ tab, setTab }: { tab: TTab,setTab: React.Dispatch<React.SetStateAction<TTab>> }) {
  return (
    <div className="relative h-12 lg:w-8/12 lg:mx-auto mt-14 ml-[7.8%] md:mx-[5.2%]  md:mt-18 mb-9 md:mb-12">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-row gap-4 md:gap-10 md:w-full">
          <TabButton tab={tab} setTab={setTab} name="Description" />
          <TabButton tab={tab} setTab={setTab} name="Author" />
          <TabButton tab={tab} setTab={setTab} name="Reviews" />
        </div>
      </div>
      <BarComponent position="bottom" />
    </div>
  );
}
