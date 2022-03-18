import { images } from '../../constants'
import  {HiMenuAlt4 ,HiX} from 'react-icons/hi'
import {motion } from 'framer-motion'
import './Navbar.scss'
import React ,{useState,useEffect}from 'react'

import { urlFor , client } from '../../client'
const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const [cv, setCv] = useState([]);

  useEffect(() => {
    const query = '*[_type == "cv"]';

    client.fetch(query).then((data) => {
      console.log(data[0].url)
           setCv(data[0].url)
    });
  }, []);
  return (
    <nav className="app__navbar">
       <div className="app__navbar-logo">
      <img src={images.logo} alt="logo"/>
    </div>
    <ul className="app__navbar-links">
       {['home' ,'certificates','contact','work' , 'skills','Download CV'].map((navItem)=>(
          <li className="app__flex p-text" key={`link-${navItem}`}>
                <div />
                {navItem === 'Download CV' ? (<a href={cv} onClick={()=>console.log(cv)} target="_blank" download>Download CV</a>) 
                :
                  navItem === 'certificates' ? <a href={`#about`}>{navItem}</a>:<a href={`#${navItem}`}>{navItem}</a>
               
              }
                
                
                
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
           {['home' ,'certificates','contact','work','skills','Download CV'].map((navItem)=>(
              <li  key={`${navItem}`}>
               {navItem === 'Download CV' ? 
                 <a href={cv} target="_blank" download>Download CV</a> 
                 :<a href={`#${navItem}`} onClick={()=>setToggle(false)}>{navItem}</a>} 
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