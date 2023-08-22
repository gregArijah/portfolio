import { twitterIcon, linkedinIcon, githubIcon, emailIcon } from '../icons';

export default function Contact() {
  return (
    <main>
        <div id="contact" className='flex space-x-8 justify-center h-8 lg:hidden'>
                <a href="https://twitter.com/gregarijah" className="flex h-6" title="Contact me on Twitter">{twitterIcon} </a>
                <a href="https://github.com/gregArijah" className="flex h-6"  title="Visit my Github">{githubIcon} </a>
                <a href="https://www.linkedin.com/in/arijah1/" className="flex h-6"  title="Contact me on LikedIn">{linkedinIcon} </a>
                <a href="mailto:gregarijah@gmail.com" className="flex h-6"  title="Send me an email">{emailIcon}</a>
        </div>
        <div id="contact" className='hidden lg:flex space-x-8 justify-center fixed bottom-28 pl-5'>
                <a href="https://twitter.com/gregarijah" className="flex h-6 text-2xl" title="Contact me on Twitter">{twitterIcon} </a>
                <a href="https://github.com/gregArijah" className="flex h-6 text-2xl"  title="Visit my Github">{githubIcon} </a>
                <a href="https://www.linkedin.com/in/arijah1/" className="flex h-6 text-2xl"  title="Contact me on LikedIn">{linkedinIcon} </a>
                <a href="mailto:gregarijah@gmail.com" className="flex h-6 text-2xl"  title="Send me an email">{emailIcon}</a>
        </div>
    </main>
  );
}

