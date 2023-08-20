import Image from "next/image"

export default function Projects() {

    let projects = [ 
                {
                    name: "Javatrol",
                    description: "is a web based conversational CNC programming tool developed by machinists for machinists. From its inception it was designed to be user friendly, intuitive and provide all the coulds that \"if only this program could...\"",
                    image: "/images/projects/javatrol.jpeg",
                    link: "https://javatrol.herokuapp.com",
                },
                {
                    name: "Veleron",
                    description: "is a web based attendance and time tracking app; a connected punchclock. The initial release of the app will focus mainly on calculating the number of hours a given employee has worked over a selected period of time.",
                    image: "/images/projects/veleron8.png",
                    link: "https://veleron.vercel.app/"
                },
                {
                    name: "MotoMetrix",
                    description: "is an arduino project which collects data from sensors on a vehicle and displays it to a LCD screen. During the pandemic I decided to learn to weld, after successfully building a go-kart I built a digital dashboard using the arduino-nano controller.",
                    image: "/placeholder.jpeg",
                    link: "https://github.com/gregArijah/digital-dashboard/"
                },
            ];

    let bootcamp = [
                {
                    name: "Emperor's Dish Restaurant",
                    image: "/images/projects/emperors_dish.png",
                    link: "link to site here"
                },
                {
                    name: "EVie - Charging Station Finder",
                    image: "/images/projects/evie.jpeg",
                    link: "link to site here"
                },
                {
                    name: "Social Network API",
                    image: "/images/projects/social_network_api.jpeg",
                    link: "link to site here"
                },
                {
                    name: "E-Commerce Backend",
                    image: "/images/projects/ecommerce_backend.jpeg",
                    link: "link to site here"
                },
                {
                    name: "Weather Dashboard",
                    image: "/images/projects/weather_dashboard.jpeg",
                    link: "link to site here"
                },
                {
                    name: "Team Profile Generator",
                    image: "/images/projects/team_profile.jpeg",
                    link: "link to site here"
                },
                {
                    name: "JavaScript Challenge",
                    image: "/images/projects/coding_quiz.jpeg",
                    link: "link to site here"
                },
                {
                    name: "Password Generator",
                    image: "/images/projects/password_generator.jpeg",
                    link: "link to site here"
                },
            ];

    return (
        <main className="flex flex-col justify-between p-5 space-y-2" id="projects">
    
                <p className="text-md font-bold">Projects</p> 
                    
                {projects.map((project, index) => {
                    return ( 
                        <div  key ={index} className="w-full">
                            <p className="text-sm"><span className="font-bold">{project.name}</span> {project.description}</p>
                            <a href={project.link}><Image src={project.image} className="rounded" height="190" width="360" alt="projects"/></a>
                        </div>
                        )
                })}
            
                <p className="text-sm font-bold">Challenges and Assignments from Bootcamp</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 text-xs gap-x-2 gap-y-2">
                    {bootcamp.map((project, index) => {
                        return ( <a key={index} className="flex flex-col justify-between"href={project.link}><span className="font-normal">{project.name}</span><Image src={project.image} className="w-auto h-auto border-2 border-slate-300" height="350" width="350" alt="projects"/></a>)
                    })}
                </div>    
        </main>
    )


}