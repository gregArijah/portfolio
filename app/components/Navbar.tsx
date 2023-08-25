//navbar component for portfolio

export default function Navbar() {


    return (
        <div>
            {/* small and medium screens */}
            <div className={`lg:hidden flex space-x-3 p-2 sm:px-24 w-screen justify-end text-xs left-0 right-0 fixed bg-slate-900`}>
                    <a href="#about">about_me</a> 
                    <a href="#tech">tech_stack</a> 
                    <a href="#projects">projects</a>
                    {/* <a href="#contact">contact_me</a> */}
            </div>
            {/* large screens */}
            <div className={`hidden lg:flex flex-col text-md justify-start text-left p-5 mt-24 w-max  space-y-4`}>
                    <a href="#about">about_me</a> 
                    <a href="#tech">tech_stack</a> 
                    <a href="#projects">projects</a>
            </div>

        </div>
    )
}