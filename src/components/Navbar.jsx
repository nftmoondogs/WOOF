import { useState } from "react"

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">


<h1 className="pt-2 font-sydney font-semibold ss:text-[75px] text-[35px] text-creamgreen ss:leading-[80.8px] leading-[30px] drop-shadow-2xl">
          WOOF
        </h1>





<ul className="list-none sm:flex hidden justify-end items-center flex-1">
{navLinks.map((nav, index) => (
  <li
  key={nav.id}
  className={`pt-4 font-poppins font-normal cursor-pointer text-[20px]
   ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-creamgreen`}
  >
    <a href={`#${nav.id}`}>
      {nav.title}
    </a>
  </li>
))}
</ul>

<div className="pt-1 sm:hidden flex flex-1 justify-end items-center ">
  <img
   src={toggle ? close : menu}
   alt="menu"
   className="mb-10 w-[28px] h-[28px]
   object-contain"
   onClick={() => setToggle((prev) => !prev)}
   />

<div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 z-[1] mb-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className={`font-poppins font-normal relative z-[1] cursor-pointer text-[16px]
            ${index == navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
            >
              <a href={`#${nav.id}`}>
              {nav.title}
              </a>
            </li>
          ))}
          </ul> 
</div>
</div>

    </nav>
  )
}

export default Navbar