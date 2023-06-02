//navbar component for portfolio

export default function Navbar() {

    return (
        <main className="p-5 flex w-screen justify-end">
            <div className="space-x-6 text-l pr-5">
                <a href="#home">home</a>
                <a href="#aboutMe">about_me</a>
                <a href="#techStack">tech_stack</a> 
                <a href="#projects">projects</a>
                <a href="#resume">resume</a>
                <a href="#contact">contact_me</a>
            </div>
        </main>
    )
}