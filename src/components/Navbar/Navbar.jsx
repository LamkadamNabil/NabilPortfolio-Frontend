import React from 'react';
 const menuConfig = [
   {
     title: 'Home',
   },
   {
     title: 'Services',
     subItems: ['Cooking', 'Cleaning'],
   },
   {
     title: 'Contact',
     subItems: ['Phone', 'Mail'],
   },
 ];
function Navbar({ menuConfig }) {

  return <div className="menu-wrapper">
console.log({menuConfig})
  <ul>
     { menuConfig.map((item,index)=>(
       <li> item.title </li> 
     ))
     }

  </ul>
  </div>;
}

export default Navbar;