"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"

const HeroSection = () => {
    const imgRef = useRef()
    useEffect(() => {
        const imageElement = imgRef.current;

        const handleScroll = () =>{
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if(scrollPosition > scrollThreshold){
                imageElement.classList.add("scrolled");
            }else{
                imageElement.classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll" , handleScroll)

        return() => window.removeEventListener("scroll" , handleScroll)
    }, [])
  return (
    <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-20 gradient-title">
                Manage Your Finances <br /> with Intelligence
            </h1>
            <p className="text-xl text-silver-100 mb-8 max-w-2xl mx-auto">
                An AI-powered financial management platform that helps to track , analyze , and optimize your spending with real-time insights.
            </p>
            <div className="flex justify-center space-x-4">
                <Link href = "/dashboard">
                    <Button size = "lg" className="px-8">Get Started</Button>
                </Link>
                <Link href = "https://www.youtube.com/">
                    <Button size = "lg" variant = "outline" className="px-8">watch demo</Button>
                </Link>
            </div>
            <div className="hero-image-wrapper">
                <div ref = {imgRef} className="hero-image   ">
                    <Image src= '/expenzo_banner.png' width={1280} height={720} alt="Dashboard Preview" className="rounded-lg shadow-2xl border mx-auto "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection