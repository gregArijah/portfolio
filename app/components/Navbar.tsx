//navbar component for portfolio

export default function Navbar() {

    return (
        <main className="flex space-x-3 p-2 sm:px-24 w-screen justify-end text-xs left-0 right-0 fixed bg-zinc-300">
                <a href="#about">about_me</a> 
                <a href="#tech">tech_stack</a> 
                <a href="#projects">projects</a>
                <a href="#contact">contact_me</a>
        </main>
    )
}