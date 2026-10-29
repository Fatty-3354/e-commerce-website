"use client"
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { PiShoppingBag } from "react-icons/pi";
import { PiHeartLight } from "react-icons/pi";
import logo from '../public/logo.png'
import Image from "next/image";
// import { Inter } from "next/font/google";



interface navProp{
    href:string,
    children:ReactNode
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    // const inter = Inter({ subsets: ['latin'], weight: ['400'] })
    const handleToggleMenu = ()=>{
        console.log(toggleMenu)
        setToggleMenu(prev=>!prev)
    }
    const NavLinks = ({href, children}:navProp)=>{
        const pathname = usePathname()
        const isActive = href === pathname

        return(
            <Link className={``} href={href}>{children}</Link>
        )
    }

  return (
    <nav className="flex justify-between items-center px-5 lg:px-10 py-5 bg-[#D9D9D9]/66 relative">
        <div className="flex  gap-8 items-center ">
            <button onClick={handleToggleMenu} className="">
                <BiMenuAltLeft className="text-3xl" />
            </button>
            
            <div className={` ${toggleMenu ? "top-20 left-0 flex w-full h-125 flex-col "  : "hidden lg:flex "} flex lg:w-auto lg:h-auto  lg:flex-row pl-5 lg:pl-0 lg:pt-0 pt-5 hover:bg-black/45 lg:hover:bg-none hover:text-white gap-8 lg:hover:text-black lg:static absolute z-50 bg-black/30 lg:bg-transparent backdrop-blur-2xl lg:backdrop-blur-none`}>
                <NavLinks href="/">Home</NavLinks>
                <NavLinks href="">Collections</NavLinks>
                <NavLinks href="">New</NavLinks>
            </div>
        </div>
        <div className="">
            <Image className="size-10" src={logo} alt="" />
        </div>

        <div className="flex lg:gap-10 gap-2 items-center">
            <button className="rounded-full bg-black text-white p-2 hidden lg:flex items-center justify-center"><PiHeartLight className="transform -rotate-45" /></button>
            <div className="flex items-center">
                <p className="text-white bg-black px-4 py-1 rounded-full hidden lg:flex items-center justify-center">cart</p>
                <button className="rounded-full border-5 bg-white text-black p-1 flex items-center justify-center"><PiShoppingBag /></button>
            </div>
            <Link className="rounded-full bg-black text-white p-2 flex items-center justify-center" href={""}><LuUserRound /></Link>
        </div>
    </nav>
  )
}

export default Navbar