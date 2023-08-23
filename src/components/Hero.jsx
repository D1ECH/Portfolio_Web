import {motion} from 'framer-motion';

import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section classname="relative w-full h-screen mx-auto">
      <div classname={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div classname="flex flex-col justify-center mt-5">
          <div classname="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div classname="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 classname={`${styles.heroHeadText} text-white`}>Hi, I'm <span classname="text-[#915eff]">Diego</span></h1>
          <p classname={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br classname="sm:block hidden"> interfaces and web applications</br>
          </p>
        </div>
      </div>
      
      <ComputersCanvas>
        
      </ComputersCanvas>
    </section>
  )
}

export default Hero