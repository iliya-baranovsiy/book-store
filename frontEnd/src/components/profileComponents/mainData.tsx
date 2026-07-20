export default function MainData({name, email}:{name: string, email: string}){
    return (
        <div className="flex flex-col lg:flex-row gap-4 w-full mb-9 md:mb-12">
            <div className="w-full">
                <span className="font-head text-black text-[16px]">Name</span>
                <div className="h-14 w-full border border-grey p-4 font-inter text-black text-[16px]">{name}</div>
            </div>
            <div className="w-full">
                <span className="font-head text-black text-[16px]">Email</span>
                <div className="h-14 w-full border border-grey p-4 font-inter text-black text-[16px]">{email}</div>
            </div>
        </div>
    )
}