"use client"
import LottieBlockText from "./LottieBlockText"
import LottieBlockTextDesktop from "./LottieBlockTextDesktop"
export const LottieBlock = () => {
    return window.innerWidth < 760 ? <LottieBlockText /> : <LottieBlockTextDesktop />
}