"use client"
import { useEffect, useState } from "react"
import LottieBlockText from "./LottieBlockText"
import LottieBlockTextDesktop from "./LottieBlockTextDesktop"
export const LottieBlock = () => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(window.innerWidth < 760)
    }, [])
    return isMobile ? <LottieBlockText /> : <LottieBlockTextDesktop />
}