import Navlinks from "./Floating-Navlinks"
export default function Floating_Nav(){
    return(
        <div className="fixed left-1/2 -translate-x-1/2 mx-auto w-1/2 h-16 top-8 bg-gray-900 bg-opacity-15 rounded-lg ">
            <div className="">
                <Navlinks/>
            </div>
            
        </div>
    )
}