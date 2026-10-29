"use client"
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { Inter } from "next/font/google";
import { HiArrowLongRight } from "react-icons/hi2";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import Image from 'next/image';
import arrow from '../../public/arrow.png'
import heroImg1 from '../../public/heroImg1.png'
import heroImg2 from '../../public/heroImg2.png'
import ProductCard from './ProductCard';
import { useRef } from 'react';




const Hero = () => {
        // const inter = Inter({ subsets: ['latin'], weight: ['400'] })
        const products = [
            {
                id:1,
                image:heroImg1,
                title:"Cotton T-shirt",
                description:"Full sleeve Zipper",
                alt:"shirt",
                amount:5000
            },
             {
                id:2,
                image:heroImg2,
                title:"Cotton T-shirt",
                description:"Full sleeve Zipper",
                alt:"shirt",
                amount:7500
            },
             {
                id:3,
                image:heroImg1,
                title:"Cotton T-shirt",
                description:"Full sleeve Zipper",
                alt:"shirt",
                amount:5000
            },
            {
                id:4,
                image:heroImg2,
                title:"Cotton T-shirt",
                description:"Full sleeve Zipper",
                alt:"shirt",
                amount:7500
            },
        ]

const scrollContainer = useRef<null | HTMLDivElement>(null)

const clientWidth = scrollContainer.current?.clientWidth
const scrollWidth = scrollContainer.current?.scrollWidth
const nexx = scrollContainer.current?.scrollLeft
console.log(clientWidth)
console.log(scrollWidth)
console.log(nexx)

const handleScroll = ()=>{
    scrollContainer.current?.scrollBy({
        left:200,
        behavior: "smooth"
    })
}

  return (
    <section className='bg-[#D9D9D9]/66 px-5 lg:px-10 py-5 relative'>
        <div className='h-[150px] lg:w-[370px] w-full flex flex-col justify-between '>
            <div className='flex flex-col gap-1'>
                <Link href={''}>Men</Link>
                <Link href={''}>Women</Link>
                <Link href={''}>Kids</Link>
            </div>
            <form className='w-full '>
                <div className='w-full  py-1 px-3 flex items-center bg-[#D9D9D9]'>
                    <CiSearch />
                    <input className='w-full  py-2 px-2 outline-none' type="search" name="" id="" />
                    <button className=''>search</button>
                </div>
            </form>
        </div>
        {/* NEW COLLECTIONS SECTION */}
        <div className='mt-10 flex flex-col gap-1 lg:flex-row justify-between'>

            {/* LEFT SIDE */}
            <div className='w-full lg:w-[40%] h-auto lg:h-[376px] flex flex-col justify-between '>
                <div className=' '>
                    <h1 className={` text-5xl font-extrabold `}>New <br /> Collections</h1>
                    <p>summer <br /> <span>2024</span></p>
                </div>
                <div className='flex gap-8 '>
                    <div className='flex-1 px-3 text-sm py-1 lg:static absolute bottom-0 bg-[#D9D9D9] flex items-center justify-around gap-5'><Link href={''}>Go To Shop</Link>  <Image src={arrow} alt='arrow' /></div>
                    <div className='hidden lg:flex gap-3 '>
                        <button className='bg-[#A3A3A3]/66 border border-[#D9D9D9]/66 size-8 flex items-center justify-center'><RiArrowLeftSLine /></button>
                        <button onClick={handleScroll} className='bg-[#A3A3A3]/66 size-8 flex items-center justify-center'><RiArrowRightSLine /></button>
                    </div>
                </div>
            </div>
            {/* products */}
            <div ref={scrollContainer} className='w-full mt-5 lg:mt-0 lg:w-[60%] h-auto lg:h-[376px] flex shrink-0 overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-5 mb-[45px] lg:mb-0 '>
                {
                    products.map(product=>(
                        <ProductCard  key={product.id} image={product.image} amount={product.amount} description={product.description} alt={product.alt} title={product.title} detailsClassName='lg:hidden' />
                    
                    ))
                }

            </div>
        </div>
    </section>
  )
}

export default Hero