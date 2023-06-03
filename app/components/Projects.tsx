import Image from "next/image"

export default function Projects() {
    return (
        <main className="flex justify-between p-10 pl-20 pr-20">
            <div className="space-y-2">
                <p className="text-xl font-bold pb-2">Projects</p>
             
                <p>Javatrol is a web based conversational CNC programming tool developed by machinists for machinists. From its inception it was designed to be user friendly, intuitive and provide all the coulds that "if only this program could..."<br/>
                    <a href="https://javatrol.herokuapp.com"><Image src="/placeholder.jpeg" height="190" width="360" alt="projects"/></a>
                </p>
                <br/>  
                <p> Nanji is a web based workforce management application. The initial release of the app will focus mainly on calculating the number of hours a given employee has worked over a selected period of time.<br/>
                    <a href="https://github.com/gregArijah/workforce-manager"><Image src="/placeholder.jpeg" height="190" width="360" alt="projects"/></a>
                </p>
                <br/> 
                <p> MotoMetrix is an arduino project which collects data from sensors on a vehicle and displays it to a LCD screen. During the pandemic I decided to learn to weld, after successfully building a go-kart I built a digital dashboard using the arduino-nano controller.<br/>
                    <a href="https://github.com/gregArijah/"><Image src="/placeholder.jpeg" height="190" width="360" alt="projects"/></a>
                </p> 

            </div>
        </main>
    )


}