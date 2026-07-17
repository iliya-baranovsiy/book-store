export default function FormButton({text}:{text:string}){
    return (
        <button type="submit" className="w-full h-14 bg-black text-white font-head text-[18px] cursor-pointer leading-6 tracking-wider text-center md:mb-10">{text}</button>
    )
}