//navbar component for portfolio

export default function Navbar() {

    return (
        <main className="flex flex-row space-x-3 p-2 w-screen text-xs justify-end fixed top-0 bg-zinc-300">
                <a href="#about">about_me</a>
                <a href="#tech">tech_stack</a> 
                <a href="#projects">projects</a>
                <a href="#contact">contact_me</a>
        </main>
    )
}