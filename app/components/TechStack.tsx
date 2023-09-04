import Image from 'next/image'

export default function TechStack() {


    return (
        <div className="flex flex-col justify-between p-5 space-y-2" id="tech">
                <p className="text-lg font-bold">Tech Stack</p>
                <p className="text-sm">I have experience with the following technologies:</p>
                <div className="grid grid-cols-6 md:grid-cols-12  text-sm gap-x-4 sm:gap-x-2 gap-y-2 w-11/12 sm:w-full md:hidden">
                    <Image src="/images/techstack/005-nodejs.png" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/expressjs.png" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/nextjs.jpg" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/007-physics.png" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/004-typescript.png" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/006-js.png" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/mongodb.png" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/008-mysql.png" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/003-postgre.png" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/graphql.png" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/tailwind.png" height="48" width="48" alt=""/>
                    <Image src="/images/techstack/arduino.png" height="48" width="48" alt=""/>
                </div>
                <div className="md:grid grid-cols-6 md:grid-cols-12 lg:grid-cols-12 text-sm gap-x-4 sm:gap-x-2 gap-y-2 w-11/12 sm:w-full hidden">
                    <Image src="/images/techstack/005-nodejs.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/expressjs.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/nextjs.jpg" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/007-physics.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/004-typescript.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/006-js.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/mongodb.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/008-mysql.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/003-postgre.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/graphql.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/tailwind.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/arduino.png" height="64" width="64" alt=""/>
                </div>
        </div>   
    )
}