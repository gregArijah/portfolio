import Image from "next/image"
import Link from "next/link"
import { internetIcon, githubIcon } from "../icons"


export default function Projects() {

    let projects = [ 
                {
                    name: "Javatrol",
                    description: "is a full stack conversational CNC programming tool developed by machinists for machinists. From its inception it was designed to be user friendly, intuitive and provide all the coulds that \"if only this program could...\"",
                    image: "/images/projects/javatrol.jpeg",
                    link: "https://javatrol.herokuapp.com",
                    github: "https://github.com/gregArijah/cnc-gcode-generator",
                    tech: ["Javascript","React","Mongoose", "MongoDB", "Express", "Node.js", "HeadlessUI", "TailwindCSS"],
                },
                {
                    name: "Veleron",
                    description: "is a full stack attendance and time tracking app; a connected punchclock. The initial release will focus on calculating the number of hours employees have worked over a selected period in order to calculate their pay.",
                    image: "/images/projects/veleron8.png",
                    link: "https://veleron.vercel.app/",
                    github: "https://github.com/gregArijah/workforce-manager",
                    tech: ["Typescript", "Next.js", "Prisma", "PostgreSQL", "Node.js","NextAuth.js", "MaterialUI", "TailwindCSS"],
                },
                {
                    name: "MotoMetrix",
                    description: "is a digital dashboard; an arduino project which collects and displays sensor data. During the pandemic I learned to weld, and after a successful go-kart build, I built a dashboard using the arduino controller.",
                    image: "/images/projects/speedway.jpg",
                    link: "https://gregarijah.github.io/digital-dashboard/",
                    github: "https://github.com/gregArijah/digital-dashboard/",
                    tech: ["C++", "Arduino"]
                },
                {
                    name: "EVie",
                    description: "is a web based application that allows users to search for electric vehicle charging stations across North America. The app uses the NREL API to find charging stations and the Google Maps API to display them on a map.",
                    image: "/images/projects/evie.jpeg",
                    link: "https://yerimechoi.github.io/eVie/",
                    github: "https://github.com/yerimechoi/eVie",
                    tech: ["Javascript", "jQuery", "HTML", "CSS",  "Materialize", "NREL API", "Google Maps API"],

                },
            ];

   
return (
  <div className="flex flex-col justify-between p-5 space-y-2" id="projects">
    {/* Section title */}
    <p className="text-lg font-bold">Projects</p>
    
    {/* Mapping through the 'projects' array */}
    {projects.map((project, index) => {
      return (
        <div key={index} className="w-full space-y-1 pb-8">
          {/* Project name and links */}
          <p className="font-bold space-x-3">
            <span>{project.name}</span>
            {/* Links to external project and GitHub */}
            <span><Link href={project.link} target="_blank">{internetIcon}</Link></span>
            <span><Link href={project.github} target="_blank">{githubIcon}</Link></span>
          </p>
          <div className="flex flex-col sm:flex-row space-y-2">
            {/* Project description and technologies */}
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-justify mr-3">{project.name} {project.description}</p>
              {/* Displaying technologies (hidden on small screens) */}
              <p className="hidden sm:block">
                {project.tech.map((tech, index) => {
                  return (
                    <span key={index} className="inline-flex text-xs font-bold bg-slate-300 text-slate-800 rounded-md p-0.5 mr-1">{tech} </span>
                  )
                })}
              </p>
            </div>
            
            {/* Project image (shown on larger screens) */}
            <p className="h-min hidden sm:flex border border-slate-300 rounded">
              <Link href={project.link} target="_blank">
                  <Image src={project.image} className="rounded" height="600" width="600" alt="projects"/>
              </Link>
            </p>
            
            {/* Project image (shown on small screens) */}
            <p className="sm:hidden max-w-max border border-slate-400 rounded">
              <Link href={project.link} target="_blank">
                  <Image src={project.image} className="rounded" height="350" width="350" alt="projects"/>
              </Link>
            </p>
            
            {/* Displaying technologies (visible only on small screens) */}
            <p className="block sm:hidden">
              {project.tech.map((tech, index) => {
                return (
                  <span key={index} className="inline-flex text-xs font-bold bg-slate-300 text-slate-800 rounded-md p-0.5 mr-1">{tech} </span>
                )
              })}
            </p>
          </div>
        </div>
      )
    })}
  </div>
)

    // return (
    //     <div className="flex flex-col justify-between p-5 space-y-2" id="projects">
    
    //             <p className="text-lg font-bold">Projects</p> 
                    
    //             {projects.map((project, index) => {
    //                 return ( 
    //                     <div  key ={index} className="w-full space-y-1 pb-8">
    //                         <p className="font-bold space-x-3">
    //                             <span>{project.name}</span> 
    //                             <span><Link href={project.link}>{internetIcon}</Link></span>
    //                             <span><Link href={project.github}>{githubIcon}</Link></span>
    //                         </p>
    //                         <div className="flex flex-col sm:flex-row space-y-2">    
    //                             <div className="flex flex-col space-y-2">
    //                                 <p className="text-sm text-justify mr-3">{project.name} {project.description}</p>
    //                                 <p className="hidden sm:block">
    //                                     {project.tech.map((tech, index) => {
    //                                         return (<span key={index} className="inline-flex text-xs font-bold bg-slate-300 text-slate-800 rounded-md p-0.5 mr-1">{tech} </span>)
    //                                     })}
    //                                 </p>
    //                             </div>
    //                             <p className="h-min hidden sm:flex border border-slate-300 rounded"><Image src={project.image} className="rounded" height="600" width="600" alt="projects"/></p>
    //                             <p className="sm:hidden max-w-max border border-slate-400 rounded"><Image src={project.image} className="rounded" height="350" width="350" alt="projects"/></p>
    //                             <p className="block sm:hidden">
    //                                     {project.tech.map((tech, index) => {
    //                                         return (<span key={index} className="inline-flex text-xs font-bold bg-slate-300 text-slate-800 rounded-md p-0.5 mr-1">{tech} </span>)
    //                                     })}
    //                                 </p>
    //                         </div>
                            
                            
    //                     </div>
    //                     )
    //             })}
            
                
    //     </div>
    // )


}