//header component for portfolio
import Image from "next/image"

export default function Header() {
    
    return (
        <main>
            {/* small and medium screens */}
            <div className="lg:hidden flex justify-between pl-5 pt-5" >
                <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold pb-1 pt-8">Greg Arijah</p>
                    <p className="text-sm">Software Developer</p>
                    <p className="text-sm">Toronto, Canada</p>
                </div>
                <div>
                    <Image src="/images/avatar.png" width={200} height={200} alt="hello world"/>
                </div>
            </div>   
            {/* large screens */}
            <div className="hidden lg:flex justify-between pl-5 pt-5 space-x-4" >
                <div className="flex flex-col justify-center space-y-3">
                    <p className="text-4xl font-bold pb-1 pt-8">Greg Arijah</p>
                    
                    <div className="space-y-1">
                        <p className="text-xl">Software Developer</p>
                        <p className="text-xl">Toronto, Canada</p>
                    </div>
                </div>
                <div>
                    <Image src="/images/avatar.png" width={160} height={175} alt="hello world"/>
                </div>
            </div>   

        </main>
    )}

