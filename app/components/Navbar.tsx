//navbar component for portfolio

import { useEffect, useState } from "react";

export default function Navbar() {
    const [colorScheme, setColorScheme] = useState("light") //default color scheme is light

    useEffect(() => {
        setColorScheme(
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
        );
    }, [])

    return (
        <main className={`flex space-x-3 p-2 sm:px-24 w-screen justify-end text-xs left-0 right-0 fixed ${colorScheme == 'dark' ? 'bg-zinc-900': 'bg-zinc-300'}`}>
                <a href="#about">about_me</a> 
                <a href="#tech">tech_stack</a> 
                <a href="#projects">projects</a>
                <a href="#contact">contact_me</a>
        </main>
    )
}