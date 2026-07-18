export default function Button({text, handleClick}:{text:string, handleClick: (() => void)}){
    return (
        <a className="flex w-full h-14 bg-black text-white font-head justify-center items-center text-[24px]" onClick={handleClick}>{text}</a>
    )
}