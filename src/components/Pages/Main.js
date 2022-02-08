import Brand from "../Sections/Brand"
import HeroSections from "../Sections/HeroSections"
import Like from "../Sections/Like"
import Release from "../Sections/Release"
import SignUp from "../Sections/SignUp"
import SuperRare from "../Sections/SuperRare"
import Home from "./Home"
export default function Main() {
    return (
        <main>
            <Home/>
            <HeroSections/>
            <Brand/>
            <Release/>
            <SuperRare/>
            <Like/>
           <SignUp/> 
        </main>
    )
}