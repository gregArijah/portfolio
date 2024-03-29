import { twitterIcon, linkedinIcon, githubIcon, emailIcon } from '../icons';

export default function Contact() {
  return (
    <div>
      {/* small & medium screen layout */}
        <div id="contact" className='flex space-x-8 h-8 lg:hidden text-lg sm:text-xl'>
                <a  target="_blank" href="https://twitter.com/gregarijah" className="flex h-6" title="Contact me on Twitter">{twitterIcon} </a>
                <a target="_blank" href="https://github.com/gregArijah" className="flex h-6"  title="Visit my Github">{githubIcon} </a>
                <a target="_blank" href="https://www.linkedin.com/in/arijah1/" className="flex h-6"  title="Contact me on LikedIn">{linkedinIcon} </a>
                <a target="_blank" href="mailto:gregarijah@gmail.com" className="flex h-6"  title="Send me an email">{emailIcon}</a>
        </div>
        {/* large screen layout */}
        <div id="contact" className='hidden lg:flex space-x-14 pl-5'>
                <a target="_blank" href="https://twitter.com/gregarijah" className="flex h-6 text-3xl" title="Contact me on Twitter">{twitterIcon} </a>
                <a target="_blank" href="https://github.com/gregArijah" className="flex h-6 text-3xl"  title="Visit my Github">{githubIcon} </a>
                <a target="_blank" href="https://www.linkedin.com/in/arijah1/" className="flex h-6 text-3xl"  title="Contact me on LikedIn">{linkedinIcon} </a>
                <a target="_blank" href="mailto:gregarijah@gmail.com" className="flex h-6 text-3xl"  title="Send me an email">{emailIcon}</a>
        </div>
    </div>
  );
}

