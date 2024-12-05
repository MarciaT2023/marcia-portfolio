import React, { FC } from 'react';
import {BsLinkedin, BsGithub, BsMedium, BsMailbox} from 'react-icons/bs';

const Socials: FC = () => {
  return (
    <div className="socials">
        <a href="mailto:marciatmerritt@gmail.com" target='blank' rel='noreferrer'><BsMailbox/></a>
        <a href="https://www.linkedin.com/in/marcia-merritt-58662761/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/marciatmerritt" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://medium.com/@marciatmerritt" target="_blank" rel='noreferrer'><BsMedium/></a>
    </div>
  )
}

export default Socials;