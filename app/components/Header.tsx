//header component for portfolio
import Image from "next/image"

export default function Header() {
    
    return (
        <main className="flex justify-between p-5" >
            <div className="flex flex-col justify-center">
                <p className="text-lg font-bold pb-2 pt-8">Greg Arijah</p>
                <p className="text-xs">Software Developer</p>
                <p className="text-xs">Toronto, Canada</p>
            </div>
            <div>
                <Image src="/images/avatar.png" width={200} height={200} alt="hello world"/>
            </div>
        </main>   
    )}

