import Image from 'next/image'

export default function TechStack() {


    return (
        <main className="flex flex-col justify-between p-5 space-y-2" id="tech">
                <p className="text-md font-bold">Tech Stack</p>
                <p className="text-sm">I have experience with the following technologies:</p>
                <ul className="grid grid-cols-3 text-sm space-x-2">
                    <Image src="/images/techstack/005-nodejs.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/expressjs.webp" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/nextjs.jpg" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/007-physics.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/004-typescript.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/006-js.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/mongodb.jpg" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/008-mysql.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/003-postgre.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/graphql.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/tailwind.png" height="64" width="64" alt=""/>
                    <Image src="/images/techstack/arduino.png" height="64" width="64" alt=""/>
                </ul>
        </main>   
    )
}