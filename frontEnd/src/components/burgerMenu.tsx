import SearchBar from "./searchBar"
import Button from "./bookComponents/buttonComponent"

export default function BurgerMenu(){
    return(
        <div className="fixed left-0 flex flex-col min-h-screen top-26 w-full rounded-lg bg-white lg:hidden pt-14 px-[7.8%] z-50">
            <SearchBar hidden={false}/>
            <Button text="SIGN IN"/>
        </div>
    )
}