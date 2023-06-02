//header component for portfolio

export default function Header() {

    return (
        <main className="p-5 flex min-h-screen w-screen justify-end">
            <div className="space-x-6 text-xl pr-5">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#stack">Stack</a> 
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
            </div>
        </main>
    )
}