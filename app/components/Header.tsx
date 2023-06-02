//header component for portfolio
import Image from "next/image"

export default function Header() {
    
    return (
        <main className="flex justify-between p-10 pl-20 pr-20">
            <div className="space-y-2">
                <p className="text-4xl font-bold pb-2">Greg Arijah</p>
                <p className="text-xl">Software Developer</p>
                <p className="text-xl">Toronto, Canada</p>
            </div>
            <div>
                <Image src="/placeholder.jpeg" width={200} height={200} alt="hello world"/>
            </div>
        </main>   
    )}

