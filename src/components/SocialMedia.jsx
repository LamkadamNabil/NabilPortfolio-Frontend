import React from 'react'
import { BsLinkedin ,BsGithub } from 'react-icons/bs'
import { AiFillMail  } from 'react-icons/ai'
const SocialMedia = () => {
  return (
    <div className="app__social">
         <div>
            <a
              href='https://www.linkedin.com/in/nabil-lamkadam-12b34b202/'
              target="_blank"
            >
              <BsLinkedin />
            </a> 
         </div>
         <div>
         <a
              href='https://github.com/LamkadamNabil'
              target="_blank"
            >
             <BsGithub/>
             </a>
         </div>
         <div>
         <a
              href="mailto:na.lamkadam@gmail.com"
              target="_blank"
            >
             <AiFillMail />
             </a>
         </div>
    </div>
  )
}

export default SocialMedia