import React from 'react'
import './Header.scss'
import {motion } from 'framer-motion'
import { images } from '../../constants'
import AppWrap from '../../wrapper/AppWrap'
const scaleVariants ={
  whileInView :{
    opacity:[0,1],   
    scale:[0,1] ,
    transition :{duration:1 ,ease:"easeInOut"} 

  }

}
const Header = () => {
  return (
    <div className="app__header app__flex">
     <motion.div
       whileInView={{x:[-100,0], opacity:[0,1]}}
       transition={{duration:0.6}}
       className="app__header-info"
     >
         <div className="app__header-badge">
             <div className="badge-cmp app__flex">
               <span>👋</span>
               <div style={{marginLeft  :20}}>
                 <p className='p-text'> Hello ,I am </p>
                 <h1 className='head-text'>
                     NABIL LAMKADAM
                 </h1>
               </div>
             </div>
             <div className="tag-cmp app__flex">
             <p className='p-text'>Software Engineering Student</p>
             <p className='p-text'>I Live To Build Things <span className="tag-span">💻👨‍💻</span> </p>
             <p className='p-text'>I Build Things For A Living  <span className="tag-span">🚀</span> </p>
            
             </div>

         </div>
     </motion.div>
     <motion.div
       whileInView={{opacity:[0,1]}}
       transition={{duration:0.6 ,delayChildren:0.6} }
       className="app__header-img"
     >
      <img src={images.profile1} alt="profile_bg"/>
      <motion.img
       whileInView={{scale:[0,1]}}
       transition={{duration:1 ,ease:"easeInOut"} }
       className="overlay_circle"
       src={images.circle}
       alt="profile_circle"
       
      />

      <motion.div
         variant={scaleVariants}
         whileInView={scaleVariants.whileInView}
         className="app__header-circles"

      >
         {[images.flutter, images.react,images.redux].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
      </motion.div>
     </motion.div>
     </div>
  )
}

export default AppWrap(Header ,"home") ;