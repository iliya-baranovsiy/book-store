import type { TTab } from "../../types/tab.types.type";

export default function TabContent({ tab, description, authors }: { tab: TTab, description:string,authors:string }) {
    let text: string
    if (tab==="Description"){
        text = description
    }
    else if (tab==="Author"){
        text = authors
    }
    else {
        text = "Reviews will be there"
    }
    return (
        <div className="lg:w-8/12 lg:mx-auto md:mx-[5.2%] mx-[7.8%] whitespace-pre-line">{text}</div>
    )
}
