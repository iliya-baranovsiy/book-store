export default function Button({text}:{text:string}){
    return (
        <a className="flex w-full h-14 bg-black text-white font-head justify-center items-center text-[24px]" href="/auth">{text}</a>
    )
}