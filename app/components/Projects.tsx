import Image from "next/image"

export default function Projects() {
    return (
        <main className="flex flex-col justify-between p-5 space-y-2" id="projects">
    
                <p className="text-md font-bold">Projects</p>
                <p className="text-sm"><span className="font-bold">Javatrol</span> is a web based conversational CNC programming tool developed by machinists for machinists. From its inception it was designed to be user friendly, intuitive and provide all the coulds that &lsquo; if only this program could...&rdquo;<br/>
                    <a href="https://javatrol.herokuapp.com"><Image src="/images/projects/javatrol.jpeg" className="rounded" height="190" width="360" alt="projects"/></a>
                </p>
     
                <p className="text-sm"> <span className="font-bold">Nanji</span> is a web based workforce management application. The initial release of the app will focus mainly on calculating the number of hours a given employee has worked over a selected period of time.<br/>
                    <a href="https://github.com/gregArijah/workforce-manager"><Image src="/placeholder.jpeg" height="190" width="360" alt="projects"/></a>
                </p>
                
                <p className="text-sm"> <span className="font-bold">MotoMetrix</span> is an arduino project which collects data from sensors on a vehicle and displays it to a LCD screen. During the pandemic I decided to learn to weld, after successfully building a go-kart I built a digital dashboard using the arduino-nano controller.<br/>
                    <a href="https://github.com/gregArijah/"><Image src="/placeholder.jpeg" height="190" width="360" alt="projects"/></a>
                </p> 

            
                <p className="text-sm font-bold">Challenges and Assignments from Bootcamp</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 overflow-x-auto text-xs space-x-2 space-y-2">
                    <a className="flex flex-col justify-between"href="https://javatrol.herokuapp.com">Emperor&apos;s Dish Restaurant<Image src="/images/projects/emperors_dish.png" className="w-auto h-auto" height="350" width="350" alt="projects"/></a>
                    <a className="flex flex-col justify-between"href="https://javatrol.herokuapp.com">EVie - Charging Station Finder<Image src="/images/projects/evie.jpeg" className="w-auto  h-auto" height="350" width="350" alt="projects"/></a>
                    <a className="flex flex-col justify-between"href="https://javatrol.herokuapp.com">Social Network API<Image src="/images/projects/social_network_api.jpeg" className="w-auto h-auto" height="350" width="350" alt="projects"/></a>
                    <a className="flex flex-col justify-between"href="https://javatrol.herokuapp.com">E-Commerce Backend<Image src="/images/projects/ecommerce_backend.jpeg" className="w-auto h-auto" height="350" width="350" alt="projects"/></a>
                    <a className="flex flex-col justify-between"href="https://javatrol.herokuapp.com">Weather Dashboard<Image src="/images/projects/weather_dashboard.jpeg" className="w-auto h-auto" height="350" width="350" alt="projects"/></a>
                    <a className="flex flex-col justify-between"href="https://javatrol.herokuapp.com">Team Profile Generator<Image src="/images/projects/team_profile.jpeg" className="w-auto h-auto" height="350" width="350" alt="projects"/></a>
                    <a className="flex flex-col justify-between"href="https://javatrol.herokuapp.com">Javascript Challenge<Image src="/images/projects/coding_quiz.jpeg" className="w-auto h-auto" height="350" width="350" alt="projects"/></a>
                    <a className="flex flex-col justify-between"href="https://javatrol.herokuapp.com">Password Generator<Image src="/images/projects/password_generator.jpeg" className="w-auto h-auto" height="350" width="350" alt="projects"/></a> 
                </div>    
        </main>
    )


}