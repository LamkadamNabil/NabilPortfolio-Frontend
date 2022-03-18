import React ,{useState,useEffect}from 'react'
import {AiFillEye ,AiFillGithub} from 'react-icons/ai'
import {motion } from 'framer-motion'
import { AppWrap, MotWrap } from '../../wrapper'
import { urlFor , client } from '../../client'
import './Work.scss'
const Work = () => {
  const [activeFilter, setActiveFilter ]= useState('All')
  const [animateCard, setAnimateCard]= useState({y:0 ,opacity :1}) 
  const [works, setWorks ]= useState([])
  const [filterWork, setFilterWork]= useState([])
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data)
      setFilterWork(data)
    

    });
  }, []);
  const handleFilter = (val)=>{
    setActiveFilter(val);
    setAnimateCard([{y:100 ,opacity :0}])
    setTimeout(()=>{
      setAnimateCard([{y:0 ,opacity :1}])
        if(val === 'ALL'){
                   setFilterWork(works) ;         
        }else{
          setFilterWork(works.filter((work)=>work.tags.includes(val))  )  
        }
        
    },500)
  }
 

  return (
    <>
    <h2 className="head-text">Some   <span>Things I’ve </span>Built <br /></h2>
     <div className="app__work-filter">
              {['Web App','React JS','Mobile app','NestJS','React Native','android','Node JS','MongoDB','Express JS','NextJS','ALL'].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleFilter(item)}
                  className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                >
                  {item}
                </div>
        ))}
     </div>
     <motion.div
       transition={{duration:0.6 ,delayChildren:0.6}}
       className="app__work-portfolio"
       animate={animateCard}
     >
     {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
             <img src={urlFor(work.imgUrl)} alt={work.name} />

<motion.div
  whileHover={{ opacity: [0, 1] }}
  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
  className="app__work-hover app__flex"
>
  {
    work.projectLink ? (<a href={work.projectLink} target="_blank" rel="noreferrer">

    <motion.div
      whileInView={{ scale: [0, 1] }}
      whileHover={{ scale: [1, 0.90] }}
      transition={{ duration: 0.25 }}
      className="app__flex"
    >
      <AiFillEye />
    </motion.div>
  </a>):null
  }
  <a href={work.codeLink} target="_blank" rel="noreferrer">
    <motion.div
      whileInView={{ scale: [0, 1] }}
      whileHover={{ scale: [1, 0.90] }}
      transition={{ duration: 0.25 }}
      className="app__flex"
    >
      <AiFillGithub />
    </motion.div>
  </a>
</motion.div>
</div>

<div className="app__work-content app__flex">
<h4 className="bold-text">{work.title}</h4>
<p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
<div className="app__work-filter">
 {work.tags.map((item,index)=> (
      <div key={index}  className="app__work-filter-item app__flex item-active-tags">
        <p className="p-text">{item}</p>
      </div>
  ))}
   </div>
</div>
</div>
))}
</motion.div>
  
    </>
  )
}

export default  AppWrap(MotWrap(Work,'app__works' ),'work',"app__graybg") ;