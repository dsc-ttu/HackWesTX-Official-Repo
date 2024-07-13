import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export default function Navlinks(){
    const pathname = usePathname()
    const links = [
        {name: 'Home', href: '#home'},
        { name: 'Schedule', href: '/#schedule'},
        { name: 'FAQ', href: '/#FAQ'},
        { name: 'Apply', href: '/#Apply'},
      ];
    return(
        <div className="flex flex-row justify-center mt-1 h-14 mx-2 bg-black rounded-lg">
        {
        links.map((link) =>{
            return(
                <Link key={link.name} href={link.href} className={clsx(' box-border flex flex-col  item justify-center h-12 w-32 mt-1 mx-2 p-2 content-center border-2 border-gray-500 rounded-lg text-white text-center font-light hover:border-white ', {'border-b-4': pathname === link.href, })}>
                             <p className=" hidden md:inline">{link.name}</p>
                        </Link>
            )
        })
    }
    </div>
    )
}