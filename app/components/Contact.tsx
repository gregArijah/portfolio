import { twitterIcon, linkedinIcon, githubIcon, emailIcon } from '../icons';

export default function Contact() {
  return (
    <main className='flex space-x-24 justify-center'>
        <hr />
      
        <a href="https://twitter.com/gregarijah" className="flex h-8 text-xl space-x-2" >
            {twitterIcon} <span>Twitter</span> 
        </a>
        <a href="https://github.com/gregArijah" className="flex h-8 text-xl space-x-2">
            {githubIcon} <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/arijah1/" className="flex h-8 text-xl space-x-2">
            {linkedinIcon} <span>LinkedIn</span>
        </a>
        <a href="mailto:gregarijah@gmail.com" className="flex h-8 text-xl space-x-2">
            {emailIcon} <span>E-mail</span>
        </a>
       

    </main>
  );
}
