import React ,{useState}from 'react'
import { images } from '../../constants'
import  {HiMenuAlt4 ,HiX} from 'react-icons/hi'
import {motion } from 'framer-motion'
import './Navbar.scss'
const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <nav className="app__navbar">
       <div className="app__navbar-logo">
      <img src={images.logo} alt="logo"/>
    </div>
    <ul className="app__navbar-links">
       {['home' ,'about','contact','work' , 'skills'].map((navItem)=>(
          <li className="app__flex p-text" key={`link-${navItem}`}>
                <div />
                <a href={`#${navItem}`}>{navItem}</a>
          </li>      
       ))}
    </ul>
    <div className='app__navbar-menu'>
       <HiMenuAlt4 onClick={()=>setToggle(true)} />
       {
         toggle && (<motion.div
            whileInView={{ x: [300.0]}}
            transition ={{duration :0.85 ,ease :'easeOut'}}
         >           
         <HiX onClick={()=>setToggle(false)} />
         <ul>
           {['home' ,'about','contact','work','skills'].map((navItem)=>(
              <li  key={`${navItem}`}>
                    <a href={`#${navItem}`} onClick={()=>setToggle(false)}>{navItem}</a>
              </li>      
            ))}
           </ul>

         </motion.div>
         )}
    </div>
    </nav>
   
  )
}

export default Navbar