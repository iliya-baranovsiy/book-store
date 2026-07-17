export default function InputField({fieldName, type}:{fieldName:string, type: string}){
    return (
        <input placeholder={fieldName} type={type} required={true}  minLength={type === "password" ? 8 : undefined} className="border border-grey outline-0 appearance-none h-14 pl-4"></input>
    )
}