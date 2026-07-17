export default function InputField({fieldName, type, ref}:{fieldName:string, type: string, ref:React.RefObject<HTMLInputElement | null>}){
    return (
        <input placeholder={fieldName} type={type} ref={ref} required={true}  minLength={type === "password" ? 8 : undefined} className="border border-grey outline-0 appearance-none h-14 pl-4"></input>
    )
}