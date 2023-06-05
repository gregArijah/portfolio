//navbar component for portfolio

export default function Navbar() {

    return (
        <main className="p-5 flex w-screen justify-end fixed bg-gray-300">
            <div className="space-x-6 text-l pr-5">
                <a href="#home">home</a>
                <a href="#about">about_me</a>
                <a href="#tech">tech_stack</a> 
                <a href="#projects">projects</a>
                <a href="#contact">contact_me</a>
            </div>
        </main>
    )
}