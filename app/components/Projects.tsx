import Image from "next/image"

export default function Projects() {

    let projects = [ 
                {
                    name: "Javatrol",
                    description: "is a full stack conversational CNC programming tool developed by machinists for machinists. From its inception it was designed to be user friendly, intuitive and provide all the coulds that \"if only this program could...\"",
                    image: "/images/projects/javatrol.jpeg",
                    link: "https://javatrol.herokuapp.com",
                    tech: ["Javascript","React", "MongoDB", "Express", "Node.js", "HeadlessUI", "TailwindCSS"],
                },
                {
                    name: "Veleron",
                    description: "is a full stack attendance and time tracking app; a connected punchclock. The initial release will focus on calculating the number of hours employees have worked over a selected period in order to calculate their pay.",
                    image: "/images/projects/veleron8.png",
                    link: "https://veleron.vercel.app/",
                    tech: ["Typescript", "Next.js", "Prisma", "PostgreSQL", "Node.js","NextAuth.js", "MaterialUI", "TailwindCSS"],
                },
                {
                    name: "MotoMetrix",
                    description: "is a dashboard for recreational vehicles; an arduino project which collects and displays sensor data. During the pandemic I learned to weld, and after a successful go-kart build, I built a dashboard using the arduino controller.",
                    image: "/images/projects/comingsoon.jpeg",
                    link: "https://github.com/gregArijah/digital-dashboard/",
                    tech: ["C++", "Arduino"]
                },
                {
                    name: "EVie",
                    description: "is a web based application that allows users to search for electric vehicle charging stations across North America. The app uses the NREL API to find charging stations and the Google Maps API to display them on a map.",
                    image: "/images/projects/evie.jpeg",
                    link: "https://yerimechoi.github.io/eVie/",
                    tech: ["Javascript", "jQuery", "HTML", "CSS",  "Materialize", "NREL API", "Google Maps API"],

                },
            ];

    let bootcamp = [
                {
                    name: "Emperor's Dish Restaurant",
                    image: "/images/projects/emperors_dish.png",
                    link: "https://emperors-dish-app.herokuapp.com/"
                },
                {
                    name: "EVie - Charging Station Finder",
                    image: "/images/projects/evie.jpeg",
                    link: "https://yerimechoi.github.io/eVie/"
                },
                {
                    name: "Social Network API",
                    image: "/images/projects/social_network_api.jpeg",
                    link: "https://drive.google.com/file/d/1RoycjaPsk8E1S74Ppugd6MisYlxK5ODc/view"
                },
                {
                    name: "E-Commerce Backend",
                    image: "/images/projects/ecommerce_backend.jpeg",
                    link: "https://drive.google.com/file/d/1GUHcmWtSXxZi5MqFKBizJhMTyS2hSbhb/view"
                },
                {
                    name: "Weather Dashboard",
                    image: "/images/projects/weather_dashboard.jpeg",
                    link: "https://gregarijah.github.io/challenge-6-weather-dashboard/"
                },
                {
                    name: "Team Profile Generator",
                    image: "/images/projects/team_profile.jpeg",
                    link: "https://drive.google.com/file/d/1LF9vyzf8_zUaKiBWMi5ACeH7eV0KrdZE/view"
                },
                {
                    name: "JavaScript Challenge",
                    image: "/images/projects/coding_quiz.jpeg",
                    link: "https://gregarijah.github.io/challenge-4-javascript-quiz/"
                },
                {
                    name: "Password Generator",
                    image: "/images/projects/password_generator.jpeg",
                    link: "https://gregarijah.github.io/challenge-3-password-generator/develop/"
                },
            ];

    return (
        <main className="flex flex-col justify-between p-5 space-y-2" id="projects">
    
                <p className="text-md font-bold">Projects</p> 
                    
                {projects.map((project, index) => {
                    return ( 
                        <div  key ={index} className="w-full space-y-1">
                            <p className="font-bold">{project.name}</p>
                            <div className="flex flex-row">    
                                <p className="text-sm"><span>{project.name}</span> {project.description}</p>
                                <p><a href={project.link}><Image src={project.image} className="rounded" height="600" width="600" alt="projects"/></a></p>
                            </div>
                            <p className="pb-6"> 
                                {project.tech && project.tech.map((tech, index) => {
                                    return (<span key={index} className="text-xs font-bold bg-blue-900 rounded-md p-1 mr-1">{tech} </span>)
                                })}
                            </p>
                            
                        </div>
                        )
                })}
            
                <p className="text-sm font-bold">Challenges and Assignments from Bootcamp</p>
                {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 text-xs gap-x-2 gap-y-2"> */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:hidden text-xs gap-x-2 gap-y-2">
                    {bootcamp.map((project, index) => {
                        return ( <a key={index} className="flex flex-col justify-between"href={project.link}><span className="font-normal">{project.name}</span><Image src={project.image} className="w-auto h-auto border-2 border-slate-300" height="350" width="350" alt="projects"/></a>)
                    })}
                </div>    
                <div className="hidden lg:flex flex-col text-xs gap-x-2 gap-y-2">
                    {bootcamp.map((project, index) => {
                        return ( <a key={index} className="flex flex-col justify-between"href={project.link}><span className="font-normal">{project.name}</span><Image src={project.image} className=" border-2 border-slate-300" height="75" width="85" alt="projects"/></a>)
                    })}
                </div>    
        </main>
    )


}